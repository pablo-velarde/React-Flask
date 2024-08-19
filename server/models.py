from config import db

# Creating the User model
class User(db.Model):

    # Defining the User table
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)


    def convert_to_json(self):
        """
        Converts the User object to a JSON object
        so that we can pass it to the frontend
        """
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "password": self.password
        }
