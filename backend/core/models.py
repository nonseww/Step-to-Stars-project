from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from datetime import date
from . import db

class Users(db.Model):
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(unique=False)
    surname: Mapped[str] = mapped_column(unique=False)
    age: Mapped[int] = mapped_column(default=None)
    birthday: Mapped[date] = mapped_column(default=None)
    group: Mapped[int]
    faculty: Mapped[str]
    email: Mapped[str] = mapped_column(unique=True)
    password: Mapped[str]