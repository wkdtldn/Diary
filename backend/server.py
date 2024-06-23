from flask import Flask, jsonify, request
from pytz import timezone
import json
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity, create_refresh_token
from datetime import datetime, timedelta
from flask_cors import CORS
from app import create_app
from app import api

app = Flask(__name__)
app = create_app()
app.config['JWT_SECRET_KEY'] = 'just_my_own_secret_key'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(minutes=1)
app.config['JWT_REFRESH_TOKEN_EXPIRES'] = timedelta(days=1)
jwt = JWTManager(app)
CORS(app)

# User ---
@app.route('/sign_up', methods=['POST'])
def sign_up():
    data = request.get_json()
    name = data['name']
    password = data['password']

    return jsonify(api.sign_up(name, password)), 200

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    name = data['name']
    password = data['password']

    if api.login(name, password):
        access_token = create_access_token(identity=name)
        refresh_token = create_refresh_token(identity=name)
        return jsonify({'access_token': access_token, 'refresh_token' : refresh_token}), 200
    
    return jsonify({"msg": "wrong name or password"}), 401

# Diary ---
@app.route('/diary/<string:name>', methods=['GET'])
def get_diary(name):
    return json.dumps(api.my_diary(name), ensure_ascii=False)

@app.route('/diary/write', methods=['POST'])
def write():
    data = request.get_json()
    name = data['name']
    title = data['title']
    detail = data['detail']

    now = datetime.now(timezone('Asia/Seoul'))

    date = now.strftime("%Y-%m-%d")
    time = now.strftime('%H:%M:%S')

    return json.dumps(api.write(name, title, detail, date, time), ensure_ascii=False)

@app.route('/admin/diary/all', methods=['GET'])
def get_diary_all():
    return json.dumps(api.get_all_diary(), ensure_ascii=False)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=4382, debug=True)