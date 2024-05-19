from flask import Flask
from core import db
from core import app
from core.models import Users
from flask_migrate import Migrate

migrate = Migrate(app, db)


api = Flask(__name__)

@api.route("/users")
def user_list():
    users = db.session.execute(db.select(Users).order_by(Users.name)).scalars()
    return "шок"; 

