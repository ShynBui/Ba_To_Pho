from flask import jsonify

from server import app
from server.dao import get_documents, get_categories, get_document_types, get_keywords, get_comment_by_doc
from server.models import Status


# -------------- "/api" ------------------


# "/documents" ['GET']
def api_documents():
    documents = get_documents(status=Status.WAITING)
    documents_list = [doc.to_dict(
        fields=["id", "title", "owner", "content", "img", "view_count", "captcha", "status", "gem_cost", "discount",
                "document_type_id", "document_type", "keywords", "categories", "average_rate", "num_rate"]) for doc in
        documents]

    return jsonify(documents_list)


# "/categories" ['GET']
def api_categories():
    categories = get_categories()
    categories_list = [cate.to_dict(fields=["id", "name", "category_parent_id"]) for cate in categories]
    return jsonify(categories_list)


def api_document_types():
    types = get_document_types()
    type_list = [t.to_dict(fields=["id", "name"]) for t in types]
    return jsonify(type_list)


def api_keywords():
    keywords = get_keywords()
    kw_list = [k.to_dict(fields=["id", "name"]) for k in keywords]
    return jsonify(kw_list)


def api_comments(document_id):
    comments = get_comment_by_doc(document_id)
    comments_list = [c.to_dict(fields=["id", "content", "user.username"]) for c in comments]
    print(comments_list)


# if __name__ == '__main__':
#     with app.app_context():
#         api_comments("08cadefc-e544-46fe-92df-3eeb414ac7a1")
