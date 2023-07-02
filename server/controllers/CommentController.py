import requests
from flask import jsonify

from server import dao


def add_comment():
    content = requests.json.get('content')
    user_id = requests.json.get('user_id')
    document_id = requests.json.get('document_id')
    dao.add_comment(content, user_id, document_id)
    return jsonify({"status": 200})


def remove_comment():
    comment_id = requests.json.get('comment_id')
    dao.del_comment(comment_id)
    return jsonify({"status": 200})
