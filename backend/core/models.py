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
    # age = db.Column(db.Integer, default=None, nullable=True)
    # birthday = db.Column(db.Date, default=None, nullable=True)
    group = db.Column(db.Integer, nullable=False)
    faculty = db.Column(db.String(140), nullable=False)
    # photo = db.Column(db.String(180), default=None, nullable=True)
    email = db.Column(db.String(40), unique=True, nullable=False)
    password = db.Column(db.String(140), nullable=False)
    # id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    # name: Mapped[str] = mapped_column(nullable=False)
    # surname: Mapped[str] = mapped_column(nullable=False)
    # age: Mapped[str] = mapped_column(default=None, nullable=True)
    # birthday: Mapped[date] = mapped_column(default=None, nullable=True)
    # group: Mapped[str] = mapped_column(nullable=False)
    # faculty: Mapped[str] = mapped_column(nullable=False)
    # photo: Mapped[str] = mapped_column(default=None, nullable=True)
    # email: Mapped[str] = mapped_column(unique=True, nullable=False)
    # password: Mapped[str] = mapped_column(nullable=False)

    def __init__(self, name, surname, group, faculty, email, password):
        self.name = name
        self.surname = surname
        # self.age = age
        # self.birthday = birthday
        self.group = group
        self.faculty = faculty
        # self.photo = photo
        self.email = email
        self.password = password

    def __repr__(self):
        return f'<User {self.name!r}>'
    
    # def test_connection(self):
    #     with app.app_context():
    #         db.create_all()
