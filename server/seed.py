from app import app
from models import db, House

with app.app_context():
    db.create_all()

    houses = [
        {
            "id": 1,
            "name": "Luxury Villa in Kilimani",
            "location": "Kilimani, Nairobi",
            "price": 500000,
            "image_url": "/static/images/villa1.jpg"
        },
        {
            "id": 2,
            "name": "Beachfront Apartment in Mombasa",
            "location": "Mombasa, Kenya",
            "price": 300000,
            "image_url": "/static/images/beachfront.jpg"
        },
        {
            "id": 3,
            "name": "Mountain Retreat in Naivasha",
            "location": "Naivasha, Kenya",
            "price": 400000,
            "image_url": "/static/images/retreat1.jpg"
        },
        {
            "id": 4,
            "name": "Penthouse in Westlands",
            "location": "Westlands, Nairobi",
            "price": 750000,
            "image_url": "/static/images/penthouse.jpg"
        },
        {
            "id": 5,
            "name": "Farmhouse in Nanyuki",
            "location": "Nanyuki, Kenya",
            "price": 600000,
            "image_url": "/static/images/farmhouse.jpg"
        },
        {
            "id": 6,
            "name": "Contemporary Loft in Karen",
            "location": "Karen, Nairobi",
            "price": 450000,
            "image_url": "/static/images/loft.jpg"
        },
        {
            "id": 7,
            "name": "Lakefront Villa in Kisumu",
            "location": "Kisumu, Kenya",
            "price": 550000,
            "image_url": "/static/images/lakefront.jpg"
        },
        {
            "id": 8,
            "name": "Modern Apartment in Thika",
            "location": "Thika, Kenya",
            "price": 250000,
            "image_url": "/static/images/apartment.jpg"
        },
        {
            "id": 9,
            "name": "Beach House in Diani",
            "location": "Diani, Kenya",
            "price": 550000,
            "image_url": "/static/images/beachhouse.jpg"
        },
        {
            "id": 10,
            "name": "Country Cottage in Limuru",
            "location": "Limuru, Kenya",
            "price": 350000,
            "image_url": "/static/images/cottage.jpg"
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
