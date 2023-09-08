from flask import Flask, request, jsonify
from flask_cors import CORS
from chat import get_response

app = Flask(__name__)
CORS(app)

@app.post("/get-response")
def response():
    prompt = request.get_json().get('message')

    response = get_response(prompt)
    message = {'answer': response}
    return jsonify(message)