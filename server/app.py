import os
from flask import Flask, jsonify, request, flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user, current_user, login_required
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from sqlalchemy.exc import IntegrityError
from config import Config  # Importing configuration
from models import db, User, House, Favorite  # Importing models
from dotenv import load_dotenv
from  flask_cors import CORS
import logging

# Load environment variables from .env file
load_dotenv()

# Initialize Flask and its extensions
app = Flask(__name__, instance_relative_config=True)
app.config.from_object(Config)  # Load configurations from Config class
CORS(app)

# Initialize extensions
db.init_app(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'
migrate = Migrate(app, db)

# Create database tables
with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return jsonify(message="Hello, World!")

# Load user for Flask-Login session management
# Configure logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    logging.debug(f"Signup data: {data}")

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({"message": "Missing required fields"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(username=username, email=email, password=hashed_password)

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created successfully"}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({"message": "User with that email or username already exists"}), 400

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    logging.debug(f"Login data: {data}")

    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Missing required fields"}), 400

    user = User.query.filter_by(email=email).first()
    if user and bcrypt.check_password_hash(user.password, password):
        login_user(user)
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401
# ------------------ Property Endpoints ------------------
# Get all properties
@app.route('/properties', methods=["GET"])
def properties():
    properties_list = [
        {
            "id": property.id,
            "name": property.name,
            "description": property.description,
            "location": property.location,
            "price": property.price,
            "image": property.image
        }
        for property in House.query.all()
    ]
    return jsonify(properties_list), 200

# Get all users
@app.route('/users', methods=["GET"])
def get_users():
    users_list = [
        {
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "password": user.password,
            "role": user.role,
            "created_at": user.created_at
        }
        for user in User.query.all()
    ]
    return jsonify(users_list), 200

# Add favorite property
@app.route('/properties/<int:property_id>/favorite', methods=['POST'])
def add_property_to_favorites(property_id):
    token = request.headers.get('Authorization')
    if not token:
        return jsonify({'message': 'Authorization credentials missing'}), 401
    
    try:
        token = token.split(' ')[1]
        payload = decode_token(token)
    except (IndexError, ValueError):
        return jsonify({'message': 'Invalid token format or token error'}), 401

    user_id = payload.get('user_id')
    user = User.query.get(user_id)
    property = House.query.get(property_id)

    if not user:
        return jsonify({"error": "User not found"}), 404
    if not property:
        return jsonify({"error": "Property not found"}), 404

    existing_favorite = Favorite.query.filter_by(user_id=user_id, house_id=property_id).first()
    if existing_favorite:
        return jsonify({"message": "Property is already in favorites"}), 200

    new_favorite = Favorite(user_id=user_id, house_id=property_id)
    try:
        db.session.add(new_favorite)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": f"An error occurred while adding to favorites: {str(e)}"}), 500

    favorite_dict = {
        "user_id": new_favorite.user_id,
        "property_id": new_favorite.house_id,
        "favorite_id": new_favorite.id
    }
    return jsonify({"message": "Property added to favorites", "favorite": favorite_dict}), 201

# Property by ID - GET, PATCH, DELETE
@app.route('/properties/<int:id>', methods=['GET', 'PATCH', 'DELETE'])
def property_by_id(id):
    property = House.query.get(id)
    if not property:
        return jsonify({"message": "Property not found"}), 404

    if request.method == 'GET':
        return jsonify(property.to_dict()), 200

    elif request.method == 'PATCH':
        data = request.get_json()
        for field in ['name', 'description', 'location', 'price', 'image']:
            if field in data:
                setattr(property, field, data[field])
        db.session.commit()
        return jsonify(property.to_dict()), 200

    elif request.method == 'DELETE':
        db.session.delete(property)
        db.session.commit()
        return jsonify({"message": "Property deleted successfully"}), 200

# Get all favorites
@app.route('/favorites', methods=["GET"])
def favorites():
    favorite_list = [
        {
            "id": favorite.id,
            "name": favorite.name,
            "description": favorite.description,
            "location": favorite.description,
            "price": favorite.price,
            "image": favorite.image
        }
        for favorite in Favorite.query.all()
    ]
    return jsonify(favorite_list), 200

# Delete favorite by ID
@app.route('/favorites/<int:id>', methods=["DELETE"])
def delete_favorite(id):
    favorite = Favorite.query.get(id)
    if not favorite:
        return jsonify({"errors": ["Favorite Property not found"]}), 404

    try:
        db.session.delete(favorite)
        db.session.commit()
        return jsonify({"message": "Favorite Property deleted successfully"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"errors": [str(e)]}), 500


# ------------------ Run Application ------------------
if __name__ == "__main__":
    app.run(port=5000, host='0.0.0.0', debug=False)
