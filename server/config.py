import os 

class Config:
    # Get the base directory for database file storage 
    basedir = os.path.abspath(os.path.dirname(__file__))

    # Database URI
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'Prestige_Properties.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False


    # You can add other configurations , like secret keys, here
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'my-secret-key'