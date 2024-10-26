from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, Float, Text, ForeignKey, DateTime, Boolean 
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from flask_login import UserMixin
from datetime import datetime

db = SQLAlchemy()

# User Model
# User Model
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String(100), unique=True, nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    password = Column(String(200), nullable=False)
    role = Column(String(50), nullable=False, default='user')
    created_at = Column(DateTime, default=datetime.utcnow)
    is_active = Column(Boolean, default=True)  # Ensure this is part of the model

    # Flask-Login required methods
    @property
    def is_active(self):
        # Return True if the user is active
        return self.active


    # Relationships
    favorites = relationship('Favorite', back_populates='user')
    transactions = relationship('Transaction', back_populates='user')


# House Model
class House(db.Model, SerializerMixin):
    __tablename__ = 'houses'
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
<<<<<<< HEAD
    # description = Column(Text, nullable=False)
=======
>>>>>>> 6e24f03fe32c940ca27ef850248ada6cb20280d3
    location = Column(String(100), nullable=False)
    price = Column(Float, nullable=False)
    image = Column(String(200), nullable=False)
    # latitude = Column(Float, nullable=False)
    # longitude = Column(Float, nullable=False)
    # house_type = Column(String(50), nullable=False)  # E.g., apartment, villa, etc.
    # listed_date = Column(DateTime, default=datetime.utcnow)  # When the house was listed

    # Relationships
    favorited_by = relationship('Favorite', back_populates='house')
    transactions = relationship('Transaction', back_populates='house')

# Favorite relationship model
class Favorite(db.Model, SerializerMixin):
    __tablename__ = 'favorites'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    house_id = Column(Integer, ForeignKey('houses.id'))
    created_at = Column(DateTime, default=datetime.utcnow)  # When the favorite was added

    # Relationships
    user = relationship('User', back_populates='favorites')
    house = relationship('House', back_populates='favorited_by')

# Transaction Model
class Transaction(db.Model, SerializerMixin):
    __tablename__ = 'transactions'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    house_id = Column(Integer, ForeignKey('houses.id'), nullable=False)
    amount = Column(Float, nullable=False)  # Amount paid for the transaction
    transaction_date = Column(DateTime, default=datetime.utcnow)  # Date of the transaction
    payment_methofrom flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, Float, Text, ForeignKey, DateTime, Boolean 
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from flask_login import UserMixin
from datetime import datetime

db = SQLAlchemy()

# User Model
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String(100), unique=True, nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    password = Column(String(200), nullable=False)
    role = Column(String(50), nullable=False, default='user')
    created_at = Column(DateTime, default=datetime.utcnow)
    is_active = Column(Boolean, default=True)

    # Flask-Login required methods
    @property
    def is_active(self):
        return self.active

    # Relationships
    favorites = relationship('Favorite', back_populates='user')
    transactions = relationship('Transaction', back_populates='user')


# House Model
class House(db.Model, SerializerMixin):
    __tablename__ = 'houses'
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(Text, nullable=False)  # Added description field
    location = Column(String(100), nullable=False)
    price = Column(Float, nullable=False)
    image = Column(String(200), nullable=False)

    # Relationships
    favorited_by = relationship('Favorite', back_populates='house')
    transactions = relationship('Transaction', back_populates='house')


# Favorite relationship model
class Favorite(db.Model, SerializerMixin):
    __tablename__ = 'favorites'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    house_id = Column(Integer, ForeignKey('houses.id'))
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationships
    user = relationship('User', back_populates='favorites')
    house = relationship('House', back_populates='favorited_by')


# Transaction Model
class Transaction(db.Model, SerializerMixin):
    __tablename__ = 'transactions'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    house_id = Column(Integer, ForeignKey('houses.id'), nullable=False)
    amount = Column(Float, nullable=False)
    transaction_date = Column(DateTime, default=datetime.utcnow)
    payment_method = Column(String(50), nullable=False)

    # Relationships
    user = relationship('User', back_populates='transactions')
    house = relationship('House', back_populates='transactions')
d = Column(String(50), nullable=False)  # Payment method (e.g., credit card, bank transfer)

    # Relationships
    user = relationship('User', back_populates='transactions')
    house = relationship('House', back_populates='transactions')
