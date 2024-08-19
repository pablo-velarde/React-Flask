from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='http://localhost:5173')

@app.route('/api/users', methods=['GET'])
def users():
    return jsonify(
        {
            "users": [
                {"name": "Liam" },
                {"name": "Noah" },
            ]
        }
    )


if __name__ == '__main__':
    app.run(debug=True)
