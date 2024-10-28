# Prestige-Properties

## Overview
The *Prestige Properties API* is a RESTful API built using Flask and SQLAlchemy. It is a comprehensive real estate management system that allows users to manage properties, users, transactions, and favorites. The project also includes functionality to handle property listings, user favorites, and transactions related to property purchases.

## Table of Contents
- Property Management
- User Management
- Favorite Management
- Transaction Management
- Data Serialization

## Property Management
- Manage property listings, including creating, retrieving, updating, and deleting properties.

## User Management
- Manage user accounts and authentication (e.g., signup, login, logout).

## Favorite Management
- Allow users to favorite properties and manage their favorite properties list.

## Transaction Management
- Handle transactions between users and properties, including tracking purchase details.

## Data Serialization
- Convert objects to dictionaries for easy JSON serialization.

## Technologies Used
- *Python*
- *Flask*
- *SQLAlchemy*
- *SQLite3*
- *Pipenv* for dependency management
- *React* (for the frontend)

## Setup & Installation

### Prerequisites
Ensure you have the following installed on your machine:
- *Python 3.8.13* or higher
- *pip* (Python package installer)
- A virtual environment tool (e.g., venv, virtualenv, or pipenv)

To get a local copy of the project up and running, follow these steps:

### Steps:

1. *Clone the Repository*:
   bash
   git clone https://github.com/Emmanuel-hub-bit/Prestige-Properties.git
   

2. *Open the Project in Visual Studio Code or Your Preferred IDE*:
   bash
   $ code .
   

3. *Set up the Virtual Environment*:
   This project uses *pipenv* for managing dependencies. Install pipenv if you don’t have it yet:
   bash
   $ pip install pipenv
   
   
   Then run the following commands:
   bash
   $ pipenv install
   $ pipenv shell
   

4. *Seed the Database*:
   Run the seed script to initialize the database with some sample data:
   bash
   $ python seed.py
   

5. *Run the Application*:
   Start the Flask development server:
   bash
   $ flask run
   

   The application will be accessible at http://127.0.0.1:5000/.

## Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please create an issue or submit a pull request.

### How to Contribute:
1. Fork the repository.
2. Create a new branch for your feature:
   bash
   git checkout -b feature/your-feature
   
3. Make your changes and commit them:
   bash
   git commit -m 'Add some feature'
   
4. Push to the branch:
   bash
   git push origin feature/your-feature
   
5. Open a pull request.

## Support & Contact
If you have any issues or inquiries, feel free to reach out:

- *Email*: 

## License
This project is licensed under the MIT License. See the LICENSE file for details.

Licensed under the MIT License. Copyright (c) 2024