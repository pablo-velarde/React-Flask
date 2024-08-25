from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
cors = CORS(app, origins='http://localhost:5173')

client = MongoClient('localhost', 27017)

db = client.flask_database
Users = db.Users
