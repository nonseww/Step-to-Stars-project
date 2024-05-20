from sqlalchemy import Integer, String, Date
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import Mapped, mapped_column
from datetime import date
from core import db
from core import app

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(140), nullable=False)
    surname = db.Column(db.String(140), nullable=False)
    group = db.Column(db.Integer, nullable=False)
    faculty = db.Column(db.String(140), nullable=False)

    email = db.Column(db.String(40), unique=True, nullable=False)
    password = db.Column(db.String(140), nullable=False)

    def __init__(self, name, surname, group, faculty, email, password):
        self.name = name
        self.surname = surname
        self.group = group
        self.faculty = faculty
        # self.photo = photo
        self.email = email
        self.password = password

    def __repr__(self):
        return f'<User {self.email!r}>'
