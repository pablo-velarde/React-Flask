from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from flask_bcrypt import Bcrypt

# Create the Flask app
app = Flask(__name__)

# Enable CORS
cors = CORS(app, origins='http://localhost:5173')
bcrypt = Bcrypt(app)

# Connect to the MongoDB
client = MongoClient('localhost', 27017)

db = client.flask_database
Users = db.Users
