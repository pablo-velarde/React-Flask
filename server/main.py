from flask import request, jsonify
from config import app, Users, bcrypt
from bson.objectid import ObjectId

# Creating the routes
@app.route('/users', methods=['GET'])
def get_users():
    output = []
    for user in Users.find():
        output.append({
            '_id': str(ObjectId(user['_id'])),
            'name': user['name'],
            'email': user['email'],
            'resumes': user['resumes']
            })
    return jsonify({'users': output})

@app.route('/users/<id>', methods=['GET'])
def get_user(id):
    user = Users.find_one({'_id': ObjectId(id)})
    output = {
        '_id': str(ObjectId(user['_id'])),
        'name': user['name'],
        'email': user['email'],
        'resumes': user['resumes']
    }
    return jsonify({'user': output})

@app.route('/sign-up', methods=['POST'])
def add_user():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    resumes = request.json.get('resumes', [])

    user = Users.find_one({'email': email})

    if user is not None:
        return jsonify({'error': 'Email already in use'}, 409)
    else:
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = Users.insert_one({
            'name': name,
            'email': email,
            'password': hashed_password,
            'resumes': resumes
        })
    return jsonify({'id': str(ObjectId(new_user.inserted_id)), 'message': 'User added successfully'})

@app.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']

    user = Users.find_one({'email': email})

    if user is None or not bcrypt.check_password_hash(user['password'], password):
        return jsonify({'error': 'Unauthorized'}, 401)
    else:
        return jsonify({'message': 'Logged in successfully'})


@app.route('/users/<id>', methods=['PUT'])
def update_user(id):
    Users.update_one({'_id': ObjectId(id)}, {'$set': {
        'name': request.json['name'],
        'email': request.json['email'],
        'resumes' : request.json['resumes']
    }})
    return jsonify({'message': 'User updated successfully'})


if __name__ == '__main__':
    app.run(debug=True)
