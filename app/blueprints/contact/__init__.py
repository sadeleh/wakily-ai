from flask import Blueprint

contact_bp = Blueprint('contact', __name__)

from app.blueprints.contact import routes 