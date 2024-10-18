# app.py
from flask import Flask, jsonify, request, flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user, current_user, login_required
from flask_bcrypt import Bcrypt
from sqlalchemy.exc import IntegrityError

# Initialize Flask and its extensions
app = Flask(__name__)

# Configurations
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = 'your_secret_key'

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'


# Define User model
class User(UserMixin, db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

# Define House model
class House(db.Model):
    __tablename__ = 'houses'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    price = db.Column(db.String(50), nullable=False)
    image = db.Column(db.String(200), nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)

# Define Favorite relationship model
class Favorite(db.Model):
    __tablename__ = 'favorites'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    house_id = db.Column(db.Integer, db.ForeignKey('houses.id'))

    user = db.relationship('User', backref=db.backref('favorites', lazy=True))
    house = db.relationship('House', backref=db.backref('favorited_by', lazy=True))


# Load user for Flask-Login session management
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


# Authentication Routes
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data['username']
    email = data['email']
    password = data['password']

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create a new user
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
    email = data['email']
    password = data['password']

    user = User.query.filter_by(email=email).first()
    if user and bcrypt.check_password_hash(user.password, password):
        login_user(user)
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logout successful"}), 200


# Property Routes
@app.route('/properties', methods=['GET'])
def get_properties():
    houses = House.query.all()
    return jsonify([{
        "id": house.id,
        "name": house.name,
        "description": house.description,
        "location": house.location,
        "price": house.price,
        "image": house.image,
        "latitude": house.latitude,
        "longitude": house.longitude
    } for house in houses]), 200

@app.route('/properties/<int:house_id>', methods=['GET'])
def get_property(house_id):
    house = House.query.get_or_404(house_id)
    return jsonify({
        "id": house.id,
        "name": house.name,
        "description": house.description,
        "location": house.location,
        "price": house.price,
        "image": house.image,
        "latitude": house.latitude,
        "longitude": house.longitude
    }), 200

@app.route('/favorites/add/<int:house_id>', methods=['POST'])
@login_required
def add_favorite(house_id):
    favorite = Favorite(user_id=current_user.id, house_id=house_id)
    db.session.add(favorite)
    db.session.commit()
    return jsonify({"message": "Added to favorites"}), 201

@app.route('/favorites', methods=['GET'])
@login_required
def get_favorites():
    favorites = Favorite.query.filter_by(user_id=current_user.id).all()
    return jsonify([{
        "id": fav.house.id,
        "name": fav.house.name,
        "location": fav.house.location,
        "price": fav.house.price,
        "image": fav.house.image
    } for fav in favorites]), 200



@app.before_first_request
def create_tables():
    db.create_all()


if __name__ == "__main__":
    app.run(debug=True)
