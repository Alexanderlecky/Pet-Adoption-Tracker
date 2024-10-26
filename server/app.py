import os
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from config import Config
from models import db, User, House, Favorite
from dotenv import load_dotenv
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS

# Load environment variables from .env file
load_dotenv()

# Initialize Flask and its extensions
app = Flask(__name__, instance_relative_config=True)
app.config.from_object(Config)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Initialize extensions
db.init_app(app)
bcrypt = Bcrypt(app)
migrate = Migrate(app, db)

# Setup JWT
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY') or 'super-secret-key'
jwt = JWTManager(app)

# Create database tables
with app.app_context():
    db.create_all()

# ------------------ Authentication Endpoints ------------------

# POST: Sign up
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({"message": "All fields are required"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(username=username, email=email, password=hashed_password)

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created successfully"}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({"message": "User with that email or username already exists"}), 400

# POST: Login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    
    if not user:
        return jsonify({"message": "User not found"}), 404

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"message": "Incorrect password"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({"message": "Login successful", "access_token": access_token}), 200

# ------------------ Property Endpoints ------------------

@app.route('/properties', methods=['GET'])
def get_properties():
    houses = House.query.all()
    return jsonify([{
        "id": house.id,
        "name": house.name,
        "location": house.location,
        "price": house.price,
        "image": house.image,
    } for house in houses]), 200

@app.route('/properties/<int:house_id>', methods=['GET'])
def get_property(house_id):
    house = House.query.get_or_404(house_id)
    return jsonify({
        "id": house.id,
        "name": house.name,
        "location": house.location,
        "price": house.price,
        "image": house.image,
    }), 200

@app.route('/properties/<int:house_id>', methods=['PUT'])
@jwt_required()  # Protect route with JWT
def update_property(house_id):
    house = House.query.get_or_404(house_id)
    data = request.get_json()

    house.name = data.get('name', house.name)
    house.location = data.get('location', house.location)
    house.price = data.get('price', house.price)

    db.session.commit()
    return jsonify({"message": "Property updated successfully"}), 200

# ------------------ Favorite Endpoints ------------------

@app.route('/favorites/add/<int:house_id>', methods=['POST'])
@jwt_required()  # Protect route with JWT
def add_favorite(house_id):
    current_user_id = get_jwt_identity()
    favorite = Favorite(user_id=current_user_id, house_id=house_id)
    db.session.add(favorite)
    db.session.commit()
    return jsonify({"message": "Added to favorites"}), 201

@app.route('/favorites', methods=['GET'])
@jwt_required()  # Protect route with JWT
def get_favorites():
    current_user_id = get_jwt_identity()
    favorites = Favorite.query.filter_by(user_id=current_user_id).all()
    return jsonify([{
        "id": fav.house.id,
        "name": fav.house.name,
        "location": fav.house.location,
        "price": fav.house.price,
        "image": fav.house.image
    } for fav in favorites]), 200

@app.route('/favorites/<int:favorite_id>', methods=['DELETE'])
@jwt_required()  # Protect route with JWT
def delete_favorite(favorite_id):
    current_user_id = get_jwt_identity()
    favorite = Favorite.query.get_or_404(favorite_id)
    if favorite.user_id != current_user_id:
        return jsonify({"message": "Unauthorized"}), 403

    db.session.delete(favorite)
    db.session.commit()
    return jsonify({"message": "Favorite removed successfully"}), 200

# ------------------ Run Application ------------------
if __name__ == "__main__":
    app.run(port=5000)
