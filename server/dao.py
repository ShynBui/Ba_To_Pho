import hashlib
import secrets
from datetime import date

from flask_login import current_user
from sqlalchemy.exc import IntegrityError

from server import app, db
from sqlalchemy import or_, and_, not_, func, extract
from sqlalchemy.orm import aliased
from server.models import *


def add_user(fields):
    user = User(username=fields['username'], password=fields['password'], email=fields['email'])
    db.session.add(user)
    db.session.commit()
    return user


def get_documents(title=None, category_ids=None, type_ids=None, created_date=None, username=None, status=None):
    d = Document.query
    if status:
        d = d.filter(Document.status.__eq__(status))
    if title:
        d = d.filter(Document.title.contains(title))
    if category_ids:
        d = d.join(Document_Category).filter(Document_Category.category_id.in_(category_ids))
    if type_ids:
        d = d.filter(Document.document_type_id.in_(type_ids))
    if created_date:
        d = d.filter(func.date(Document.created_date).__eq__(created_date.date()))
    if username:
        d = d.filter(Document.user.username.contains(username))
    return d.all()


def get_popular_documents(limit=None):
    d = Document.query.outerjoin(Document.downloads).group_by(Document.id).order_by(func.count(Document.downloads).desc())
    if limit:
        d = d.limit(limit)
    return d.all()


def get_new_documents(limit=None):
    d = Document.query.order_by(Document.created_date.desc())
    if limit:
        d = d.limit(limit)
    return d.all()


def get_user_by_email(email):
    u = User.query.filter(User.email.__eq__(email)).first()
    if u:
        return u
    return None


def get_existed_user(username, email):
    u = User.query
    u = u.filter(or_(User.email.__eq__(email), User.username.__eq__(username))).first()
    if u:
        return u
    return None


def confirm_user(user):
    user.is_confirm = True
    db.session.add(user)
    db.session.commit()


def add_user(fields):
    user = User(username=fields['username'], password=fields['password'], email=fields['email'])
    db.session.add(user)
    db.session.commit()
    return user


def get_user_by_email(email):
    user = User.query.filter(User.email.__eq__(email)).first()
    return user


def add_user_form_google(fields):
    username = "google_user_" + secrets.token_hex(10)
    password = secrets.token_hex(10)
    user = User(username=username, password=password, email=fields['email'], name=fields['name'],
                avatar=fields['avatar'])
    db.session.add(user)
    for i in range(4):
        try:
            db.session.commit()
            return user
        except IntegrityError as e:
            if "username" in str(e):
                user.username = "google_user_" + secrets.token_hex(10)
    return None


def get_user_by_id(user_id):
    u = User.query.get(user_id)
    return u


def send_notification(user_id, content):
    noti = Notification(content=content, user_id=user_id)
    db.session.add(noti)
    db.session.commit()


def warn_user(user_id):
    u = User.query.get(user_id)
    if u:
        u.warn_time += 1
        if u.warn_time >= 3:
            u.is_active = False
            send_notification(user_id, "Bạn đã bị khóa tài khoản vì đã vi phạm 3 lần")
        db.session.add(u)
        db.session.commit()


def check_login(username, password, user_role=UserRole.USER):
    if username and password:
        password = str(hashlib.md5(password.strip().encode('utf-8')).hexdigest())

        return User.query.filter(User.username.__eq__(username),
                                 User.password.__eq__(password),
                                 User.user_role.__eq__(user_role)).first()


def get_categories(name=None, category_parent_id=None):
    c = Category.query
    if name:
        c = c.filter(Category.name.contains(name))
    if category_parent_id:
        c = c.filter(Category.category_parent_id.__eq__(category_parent_id))
    return c.all()


def get_document_types():
    return DocumentType.query.all()


def get_keywords(size=None):
    keywords = Keyword.query.join(Keyword.documents).group_by(Keyword.id).order_by(
        func.count(Document.id).desc())
    if size:
        keywords = keywords.limit(size)
    return keywords.all()


def get_keyword_by_name(name):
    kw = Keyword.query.filter(Keyword.name.__eq__(name))
    return kw.first()


def add_keyword(name):
    kw = Keyword(name=name)
    db.session.add(kw)
    db.session.commit()


def add_no_accept_document(fields, categories, keywords, cloudinary_public_id, cloudinary_secure_url,
                           cloudinary_image_public_id, cloudinary_image_secure_url):
    with db.session.no_autoflush:
        doc = Document(title=fields['title'], author=fields['author'], description=fields['description'],
                       user_id=fields['user_id'], document_type_id=fields['document_type_id'])

        doc.captcha = "AFB2QD1"
        doc.gem_cost = 100

        doc.cloud_link = "a"
        doc.img_cloud_link = "b"

        doc.file_link_download = "c"
        doc.img_link_download = "d"

        doc.cloudinary_secure_url = cloudinary_secure_url
        doc.cloudinary_public_id = cloudinary_public_id

        doc.cloudinary_image_public_id = cloudinary_image_public_id
        doc.cloudinary_image_secure_url = cloudinary_image_secure_url

        for cate in categories:
            c = Category.query.get(cate)
            if c:
                doc.categories.append(c)
        for key in keywords:
            kw = get_keyword_by_name(key)
            if kw:
                doc.keywords.append(kw)
            else:
                add_keyword(key)
                kw = get_keyword_by_name(key)
                doc.keywords.append(kw)

        db.session.add(doc)
        db.session.commit()


def get_comment_by_doc(doc_id, is_active=None):
    comments = Comment.query.filter(Comment.document_id.__eq__(doc_id))
    if is_active:
        comments = comments.filter(Comment.is_active.__eq__(is_active))
    comments = comments.order_by(Comment.created_date.desc())
    return comments.all()


def get_document_type_id_by_extension(extension):
    if extension == "pdf":
        doc_type = DocumentType.query.filter(DocumentType.name.__eq__("PDF")).first()
        if doc_type:
            return doc_type.id
    elif extension == "docx":
        doc_type = DocumentType.query.filter(DocumentType.name.__eq__("Word")).first()
        if doc_type:
            return doc_type.id
    elif extension == "pptx":
        doc_type = DocumentType.query.filter(DocumentType.name.__eq__("Powerpoint")).first()
        if doc_type:
            return doc_type.id
    else:
        return None


def update_document(doc_id, cloud_link, img_cloud_link, file_link_download, img_link_download):
    doc = Document.query.get(doc_id)
    if doc:
        doc.status = Status.ACCEPT
        doc.cloud_link = cloud_link
        doc.img_cloud_link = img_cloud_link
        doc.file_link_download = file_link_download
        doc.img_link_download = img_link_download
        doc.updated_date = datetime.now()
        db.session.commit()


def add_comment(content, user_id, document_id):
    comment = Comment(content=content, user_id=user_id, document_id=document_id)
    db.session.add(comment)
    db.session.commit()


def del_comment(comment_id):
    comment = Comment.query.get(comment_id)
    if comment:
        comment.is_active = False
        db.session.commit()


def get_document_by_id(doc_id):
    doc = Document.query.get(doc_id)
    return doc


def rate_document(doc_id, number_star, user_id):
    rate = Rate.query.filter(and_(Rate.document_id.__eq__(doc_id), Rate.user_id.__eq__(user_id))).first()
    if rate:
        rate.number_star = number_star
    else:
        rate = Rate(document_id=doc_id, number_star=number_star, user_id=user_id)
    db.session.add(rate)
    db.session.commit()


def favour(doc_id, user_id):
    fav = FavourList.query.filter(and_(Rate.document_id.__eq__(doc_id), Rate.user_id.__eq__(user_id))).first()
    if fav:
        return False
    else:
        fav = FavourList(document_id=doc_id, user_id=user_id)
    db.session.add(fav)
    db.session.commit()
    return True


def get_users():
    users = User.query.filter(User.user_role.__eq__(UserRole.USER))
    users = users.filter(User.is_active.__eq__(1))
    return users.all()


def update_document_admin(document_id, description=None, status=None, gem_cost=None, file_size=None):
    doc = Document.query.get(document_id)
    if description:
        doc.description = description
    if gem_cost:
        doc.gem_cost = gem_cost
    if status:
        doc.status = Status.ACCEPT
    if file_size:
        doc.file_size = file_size
    db.session.commit()


def reject_document(doc_id):
    doc = Document.query.get(doc_id)
    if doc:
        doc.status = Status.REJECT
        db.session.commit()
        return True
    return False


def update_user(user_id, fields):
    user = User.query.get(user_id)
    try:
        if user:
            if fields["name"] is not None and fields["name"].strip():
                user.name = fields["name"]
            if fields["bio"] is not None and fields["bio"].strip():
                user.bio = fields["bio"]
            if fields["social_media"] is not None and fields["social_media"].strip():
                user.social_media = fields["social_media"]
            if fields["address"] is not None and fields["address"].strip():
                user.address = fields["address"]
            if fields["phone_number"] is not None and fields["phone_number"].strip():
                user.phone_number = fields["phone_number"]
            db.session.commit()
            return {"status": 200, "msg": "success"}
        else:
            return {"status": 404, "msg": "not found"}
    except Exception as e:
        db.session.rollback()
        return {"status": 400, "msg": str(e)}