from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

@app.route('/api/users', methods=['GET'])
def users():
    return jsonify(
        [
            {'name': 'Alice'},
            {'name': 'Bob'}
        ]
    )


if __name__ == '__main__':
    app.run(debug=True)
