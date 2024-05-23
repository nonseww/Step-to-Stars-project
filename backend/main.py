import json
from flask import Flask, render_template, redirect, url_for, request, jsonify
import datetime
import requests

from core.models import Users, Dictionary
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager

from core import db
from core import app

from flask_cors import CORS

jwt = JWTManager(app)
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = datetime.timedelta(hours=100)
CORS(app)

@app.route('/users', methods=["GET"])
@jwt_required()
def user_list():
    users = Users.query.all()
    for user in users:
        return jsonify(user.email)


@app.route("/users/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        email = request.json.get("email", None)
        find_user = db.session.execute(db.select(Users).filter_by(email=email)).first()
        if not find_user:
            user = Users(
                name=request.json.get("name"),
                surname=request.json.get("surname"),
                age="", 
                birthday=datetime.datetime(1980, 1, 1, 0, 0),
                group=request.json.get("group"), 
                faculty=request.json.get("faculty"), 
                photo="", 
                email=request.json.get("email"), 
                password=request.json.get("password"),
            )

            db.session.add(user)
            db.session.commit()
            access_token = create_access_token(identity=email)
            response = {"access_token": access_token}
            return response
        else:
            return jsonify({"msg": "There is already such a user"}), 403
        

@app.route("/users/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    find_user = Users.query.filter_by(email=email).first()
    if (find_user is None):
        return jsonify({"msg": "There is not user with email {}".format(email)}), 404

    if password != find_user.password:
        return jsonify({"msg": "Wrong email or password"}), 401
    
    access_token = create_access_token(identity=email)
    response = {"access_token": access_token}
    return response


@app.route("/users/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout ok"})
    unset_jwt_cookies(response)
    return response

@app.route("/api")
def api():
    return jsonify({"msg": "ok"}), 200


@app.route("/dict/get", methods=["GET"])
def get_words():
    words = Dictionary.query.order_by("word").all()
    data = [[word.word, word.partOfSpeech, word.definition, word.synonyms, word.example] for word in words]
    return jsonify(data)


@app.route("/dict/add", methods=["POST"])
def add_word():
    word = request.json.get("word")
    find_word = Dictionary.query.filter_by(word=word).first()
    if find_word:
        return jsonify({"msg": "Such word already has"}), 403
    
    data = (json.loads(requests.get(f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}").content))[0]
    for i in range(len(data["meanings"])):

        if ("synonyms" in (data["meanings"][i]["definitions"][0]) and data["meanings"][i]["definitions"][0]["synonyms"] != [] and 
            "example" in (data["meanings"][i]["definitions"][0]) and data["meanings"][i]["definitions"][0]["example"] != []):
            if type(data["meanings"][i]["definitions"][0]["synonyms"]) != str:
                synonums = " ,".join(data["meanings"][i]["definitions"][0]["synonyms"])
                new_word = Dictionary(
                    word=data["word"],
                    partOfSpeech=data["meanings"][i]["partOfSpeech"],
                    definition=data["meanings"][i]["definitions"][0]["definition"], 
                    synonyms=synonums, 
                    example=data["meanings"][i]["definitions"][0]["example"]
            )
                
            else:
                new_word = Dictionary(
                    word=data["word"],
                    partOfSpeech=data["meanings"][i]["partOfSpeech"],
                    definition=data["meanings"][i]["definitions"][0]["definition"], 
                    synonyms=data["meanings"][i]["definitions"][0]["synonyms"], 
                    example=data["meanings"][i]["definitions"][0]["example"]
                )
            
        elif ("synonyms" in (data["meanings"][i]["definitions"][0]) and data["meanings"][i]["definitions"][0]["synonyms"] != []):

            if type(data["meanings"][i]["definitions"][0]["synonyms"]) != str:
                synonums = " ,".join(data["meanings"][i]["definitions"][0]["synonyms"])
                new_word = Dictionary(
                    word=data["word"],
                    partOfSpeech=data["meanings"][i]["partOfSpeech"],
                    definition=data["meanings"][i]["definitions"][0]["definition"], 
                    synonyms=synonums, 
                    example=""
            )
                
            else:
                new_word = Dictionary(
                    word=data["word"],
                    partOfSpeech=data["meanings"][i]["partOfSpeech"],
                    definition=data["meanings"][i]["definitions"][0]["definition"], 
                    synonyms=data["meanings"][i]["definitions"][0]["synonyms"], 
                    example=data["meanings"][i]["definitions"][0]["example"]
                )

        elif ("example" in (data["meanings"][i]["definitions"][0]) and data["meanings"][i]["definitions"][0]["example"] != []): 
            
            new_word = Dictionary(
                word=data["word"],
                partOfSpeech=data["meanings"][i]["partOfSpeech"],
                definition=data["meanings"][i]["definitions"][0]["definition"], 
                synonyms="", 
                example=data["meanings"][i]["definitions"][0]["example"]
            )
                        
        else:
            new_word = Dictionary(
                word=data["word"],
                partOfSpeech=data["meanings"][i]["partOfSpeech"],
                definition=data["meanings"][i]["definitions"][0]["definition"], 
                synonyms="", 
                example=""
            )

        db.session.add(new_word)
    
    db.session.commit()
    
    return jsonify({"msg": "ok"}), 200
