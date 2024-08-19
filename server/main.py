from flask import Flask, jsonify
from config import app, db
from models import User

# Creating the routes
@app.route('/api/users', methods=['GET'])
def users():
    # return a list of all users and convert to json
    users = User.query.all()
    json_users = [user.convert_to_json() for user in users]

    return jsonify({"users" : json_users})


if __name__ == '__main__':
    with app.app_context():
        db.create_all()

    app.run(debug=True)
