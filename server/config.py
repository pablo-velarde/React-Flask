from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from flask_bcrypt import Bcrypt

app = Flask(__name__)
cors = CORS(app, origins='http://localhost:5173')
bcrypt = Bcrypt(app)

client = MongoClient('localhost', 27017)

db = client.flask_database
Users = db.Users
