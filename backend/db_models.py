from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'<User {self.name}>'

class Diary(db.Model):
    __tablename__ = "diary"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    title = db.Column(db.String(255), nullable=False)
    detail = db.Column(db.Text(), nullable=False)
    date = db.Column(db.Text(), nullable=False)
    time = db.Column(db.Text(), nullable=False)

    user = db.relationship("User")

    def __repr__(self):
        return f'<Diary {self.title}>'
    
class Sentiment_Analysis(db.Model):
    __tablename__ = "Sentiment_Analysis"

    id = db.Column(db.Integer, primary_key=True)
    diary_id = db.Column(db.Integer, db.ForeignKey('diary.id'))
    pos = db.Column(db.Float(), nullable=False)
    neg = db.Column(db.Float(), nullable=False)
    neu = db.Column(db.Float(), nullable=False)

    diary = db.relationship("Diary")

    def __repr__(self):
        return f'<Sentiment_Analysis {self.pos}>'