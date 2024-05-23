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
    age = db.Column(db.Integer, nullable=True)
    birthday = db.Column(db.Date, nullable=True)
    group = db.Column(db.Integer, nullable=False)
    faculty = db.Column(db.String(140), nullable=False)
    photo = db.Column(db.String(140), nullable=True)
    email = db.Column(db.String(40), unique=True, nullable=False)
    password = db.Column(db.String(140), nullable=False)

    def __init__(self, name, surname, age, birthday, group, faculty, photo, email, password):
        self.name = name
        self.surname = surname
        self.age = age
        self.birthday = birthday
        self.group = group
        self.faculty = faculty
        self.photo = photo
        self.email = email
        self.password = password

    def __repr__(self):
        return f'<User {self.email!r}>'

class Dictionary(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    word = db.Column(db.String(50), nullable=False)
    partOfSpeech = db.Column(db.String(40), nullable=False)
    definition = db.Column(db.String(1000), nullable=False)
    synonyms = db.Column(db.String(100), nullable=True)
    example = db.Column(db.String(1000), nullable=False)

    def __init__(self, word, partOfSpeech, definition, synonyms, example):
        print(word)
        self.word = word
        self.partOfSpeech = partOfSpeech
        self.definition = definition
        if (not synonyms or synonyms == []):
            self.synonyms = ""
        elif (type(synonyms) is not str):
            print(synonyms)
            self.synonyms = ' ,'.join(synonyms)
        else:
            self.synonyms = synonyms
        if (not example or example == []):
            self.example = ""
        elif (type(example) is not str):
            self.example = ', '.join(example)
        else:
            self.example = example

    
    def __repr__(self):
        return f'<Word {self.word!r}>'