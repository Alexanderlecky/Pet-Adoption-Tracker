
from app import app
from models import db, House

with app.app_context():
    db.create_all()

    houses = [
        {
            "name": "Luxury Villa in Kilimani",
            "description": "Modern villa with a pool.",
            "location": "Kilimani, Nairobi",
            "price": "$500,000",
            "image": "static/images/villa1.jpg",
            "latitude": -1.2921,
            "longitude": 36.8219
        },
        {
            "name": "Beachfront Apartment in Mombasa",
            "description": "Beautiful apartment with ocean views.",
            "location": "Mombasa, Kenya",
            "price": "$300,000",
            "image": "static/images/beachfront.jpg",
            "latitude": -4.0435,
            "longitude": 39.6682
        },
        [
    {
        "name": "Mountain Retreat in Naivasha",
        "description": "Cozy cabin nestled in the hills with stunning views.",
        "location": "Naivasha, Kenya",
        "price": "$400,000",
        "image": "static/images/retreat1.jpg",
        "latitude": -0.7167,
        "longitude": 36.4355
    },
    {
        "name": "Penthouse in Westlands",
        "description": "Luxurious penthouse with city views and modern amenities.",
        "location": "Westlands, Nairobi",
        "price": "$750,000",
        "image": "static/images/penthouse.jpg",
        "latitude": -1.2654,
        "longitude": 36.8025
    },
    {
        "name": "Farmhouse in Nanyuki",
        "description": "Spacious farmhouse with a large garden and scenic surroundings.",
        "location": "Nanyuki, Kenya",
        "price": "$600,000",
        "image": "static/images/farmhouse.jpg",
        "latitude": 0.0091,
        "longitude": 37.0733
    },
    {
        "name": "Contemporary Loft in Karen",
        "description": "Stylish loft with an open-plan design and green surroundings.",
        "location": "Karen, Nairobi",
        "price": "$450,000",
        "image": "static/images/loft.jpg",
        "latitude": -1.3327,
        "longitude": 36.6883
    },
    {
        "name": "Lakefront Villa in Kisumu",
        "description": "Luxurious villa with lake views and private boat access.",
        "location": "Kisumu, Kenya",
        "price": "$550,000",
        "image": "static/images/lakefront.jpg",
        "latitude": -0.0917,
        "longitude": 34.7680
    },
    {
        "name": "Modern Apartment in Thika",
        "description": "Elegant apartment in a secure estate with modern amenities.",
        "location": "Thika, Kenya",
        "price": "$250,000",
        "image": "static/images/apartment.jpg",
        "latitude": -1.0333,
        "longitude": 37.0693
    },
    {
        "name": "Beach House in Diani",
        "description": "Charming beach house with direct access to the beach.",
        "location": "Diani, Kenya",
        "price": "$550,000",
        "image": "static/images/beachhouse.jpg",
        "latitude": -4.3224,
        "longitude": 39.5743
    },
    {
        "name": "Country Cottage in Limuru",
        "description": "Quiet countryside cottage surrounded by tea farms.",
        "location": "Limuru, Kenya",
        "price": "$350,000",
        "image": "static/images/cottage.jpg",
        "latitude": -1.0976,
        "longitude": 36.6520
    }
]

    ]

    for house in houses:
        new_house = House(
            name=house["name"],
            description=house["description"],
            location=house["location"],
            price=house["price"],
            image=house["image"],
            latitude=house["latitude"],
            longitude=house["longitude"]
        )
        db.session.add(new_house)

    db.session.commit()
    print("Seed data added successfully!")
