from flask import request, jsonify
from config import app, Users
from bson.objectid import ObjectId

# Creating the routes
@app.route('/users', methods=['GET'])
def get_users():
    output = []
    for user in Users.find():
        output.append({
            '_id': str(ObjectId(user['_id'])),
            'name': user['name'],
            'email': user['email']
            })
    return jsonify({'users': output})

@app.route('/users/<id>', methods=['GET'])
def get_user(id):
    user = Users.find_one({'_id': ObjectId(id)})
    output = {
        '_id': str(ObjectId(user['_id'])),
        'name': user['name'],
        'email': user['email']
    }
    return jsonify({'user': output})

@app.route('/users', methods=['POST'])
def add_user():
    id = Users.insert_one({
        'name': request.json['name'],
        'email': request.json['email']
    })
    return jsonify({'id': str(ObjectId(id)), 'message': 'User added successfully'})


if __name__ == '__main__':
    app.run(debug=True)
