from flask import Blueprint
from server.controllers.DocumentController import upload_cloudinary, upload_dropbox

document_bp = Blueprint('document_bp', __name__)

document_bp.route('/upload', methods=['POST'])(upload_cloudinary)
document_bp.route('/upload-dropbox', methods=['GET'])(upload_dropbox)


