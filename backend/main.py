import json
from flask import Flask, render_template, redirect, url_for, request
from core.models import Users
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager

from core import db
from core import app

jwt = JWTManager(app)

@app.route('/users', methods=["GET"])
def user_list():
    users = db.session.execute(db.select(Users).order_by(Users.name)).scalars()
    return users


@app.route("/users/register", methods=["GET", "POST"])
def user_register():
    if request.method == "POST":
        email = request.json.get("email", None)
        find_user = db.session.execute(db.select(Users).filter_by(email=email)).first()
        if not find_user:
            user = Users(
                name=request.json.get("name")[0],
                surname=request.json.get("surname")[0],
                group=request.json.get("group")[0], 
                faculty=request.json.get("faculty")[0], 
                email=request.json.get("email")[0], 
                password=request.json.get("password")[0],
            )

            db.session.add(user)
            db.session.commit()
            return {"msg": "ok"}, 200
        else:
            return {"msg": "There is already such a user"}, 403
        

@app.route("/users/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    find_user = db.get_or_404(Users, email)
    if password != find_user.password:
        return {"msg": "Wrong email or password"}, 401
    
    access_token = create_access_token(identity=email)
    response = {"access_token": access_token}
    return response
