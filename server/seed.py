from app import app
from models import db, House

with app.app_context():
    db.create_all()

    houses = [
        {
            "name": "Luxury Villa in Kilimani",
            "description": "Modern villa with a pool.",
            "location": "Kilimani, Nairobi",
            "price": 500000.0,
            "image": "static/images/villa1.jpg",
            "latitude": -1.2921,
            "longitude": 36.8219,
            "house_type": "Villa"  # Add house_type
        },
        {
            "name": "Beachfront Apartment in Mombasa",
            "description": "Beautiful apartment with ocean views.",
            "location": "Mombasa, Kenya",
            "price": 300000.0,
            "image": "static/images/beachfront.jpg",
            "latitude": -4.0435,
            "longitude": 39.6682,
            "house_type": "Apartment"  # Add house_type
        },
        {
            "name": "Mountain Retreat in Naivasha",
            "description": "Cozy cabin nestled in the hills with stunning views.",
            "location": "Naivasha, Kenya",
            "price": 400000.0,
            "image": "static/images/retreat1.jpg",
            "latitude": -0.7167,
            "longitude": 36.4355,
            "house_type": "Retreat"  # Add house_type
        },
        {
            "name": "Penthouse in Westlands",
            "description": "Luxurious penthouse with city views and modern amenities.",
            "location": "Westlands, Nairobi",
            "price": 750000.0,
            "image": "static/images/penthouse.jpg",
            "latitude": -1.2654,
            "longitude": 36.8025,
            "house_type": "Penthouse"  # Add house_type
        },
        {
            "name": "Farmhouse in Nanyuki",
            "description": "Spacious farmhouse with a large garden and scenic surroundings.",
            "location": "Nanyuki, Kenya",
            "price": 600000.0,
            "image": "static/images/farmhouse.jpg",
            "latitude": 0.0091,
            "longitude": 37.0733,
            "house_type": "Farmhouse"  # Add house_type
        },
        {
            "name": "Contemporary Loft in Karen",
            "description": "Stylish loft with an open-plan design and green surroundings.",
            "location": "Karen, Nairobi",
            "price": 450000.0,
            "image": "static/images/loft.jpg",
            "latitude": -1.3327,
            "longitude": 36.6883,
            "house_type": "Loft"  # Add house_type
        },
        {
            "name": "Lakefront Villa in Kisumu",
            "description": "Luxurious villa with lake views and private boat access.",
            "location": "Kisumu, Kenya",
            "price": 550000.0,
            "image": "static/images/lakefront.jpg",
            "latitude": -0.0917,
            "longitude": 34.7680,
            "house_type": "Villa"  # Add house_type
        },
        {
            "name": "Modern Apartment in Thika",
            "description": "Elegant apartment in a secure estate with modern amenities.",
            "location": "Thika, Kenya",
            "price": 250000.0,
            "image": "static/images/apartment.jpg",
            "latitude": -1.0333,
            "longitude": 37.0693,
            "house_type": "Apartment"  # Add house_type
        },
        {
            "name": "Beach House in Diani",
            "description": "Charming beach house with direct access to the beach.",
            "location": "Diani, Kenya",
            "price": 550000.0,
            "image": "static/images/beachhouse.jpg",
            "latitude": -4.3224,
            "longitude": 39.5743,
            "house_type": "Beach House"  # Add house_type
        },
        {
            "name": "Country Cottage in Limuru",
            "description": "Quiet countryside cottage surrounded by tea farms.",
            "location": "Limuru, Kenya",
            "price": 350000.0,
            "image": "static/images/cottage.jpg",
            "latitude": -1.0976,
            "longitude": 36.6520,
            "house_type": "Cottage"  # Add house_type
        }
    ]

    for house in houses:
        new_house = House(
            name=house["name"],
            description=house["description"],
            location=house["location"],
            price=house["price"],
            image=house["image"],
            latitude=house["latitude"],
            longitude=house["longitude"],
            house_type=house["house_type"]  # Assign house_type
        )
        db.session.add(new_house)

    db.session.commit()
    print("Seed data added successfully!")
