from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, Float, Text, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime

db = SQLAlchemy()

# User Model
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password = Column(String(200), nullable=False)
    role = Column(String(50))

    # Relationships
    properties = relationship('Property', back_populates='owner')
    transactions = relationship('Transaction', back_populates='user')
    reviews = relationship('Review', back_populates='user')
    favorite_properties = relationship('FavoriteProperties', back_populates='user')

# Property Model
class Property(db.Model, SerializerMixin):
    __tablename__ = 'properties'

    id = Column(Integer, primary_key=True)
    title = Column(String(100), nullable=False)
    description = Column(Text)
    price = Column(Float, nullable=False)
    location = Column(String(100), nullable=False)
    image_url = Column(String(255))
    owner_id = Column(Integer, ForeignKey('users.id'))

    # Relationships
    owner = relationship('User', back_populates='properties')
    transactions = relationship('Transaction', back_populates='property')
    reviews = relationship('Review', back_populates='property')
    property_type_id = Column(Integer, ForeignKey('property_types.id'))
    property_type = relationship('PropertyType', back_populates='properties')

# PropertyType Model
class PropertyType(db.Model, SerializerMixin):
    __tablename__ = 'property_types'

    id = Column(Integer, primary_key=True)
    type_name = Column(String(50), nullable=False)

    # Relationship
    properties = relationship('Property', back_populates='property_type')

# Transaction Model
class Transaction(db.Model, SerializerMixin):
    __tablename__ = 'transactions'

    id = Column(Integer, primary_key=True)
    property_id = Column(Integer, ForeignKey('properties.id'))
    user_id = Column(Integer, ForeignKey('users.id'))
    amount = Column(Float, nullable=False)
    transaction_date = Column(DateTime, default=datetime.utcnow)

    # Relationships
    property = relationship('Property', back_populates='transactions')
    user = relationship('User', back_populates='transactions')

# Review Model
class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    property_id = Column(Integer, ForeignKey('properties.id'))
    rating = Column(Integer, nullable=False)
    review_text = Column(Text)

    # Relationships
    user = relationship('User', back_populates='reviews')
    property = relationship('Property', back_populates='reviews')

# FavoriteProperties Model (many-to-many relationship)
class FavoriteProperties(db.Model, SerializerMixin):
    __tablename__ = 'favorite_properties'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    property_id = Column(Integer, ForeignKey('properties.id'))

    # Relationships
    user = relationship('User', back_populates='favorite_properties')
    property = relationship('Property')
