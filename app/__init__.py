from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from app.config import Config

def create_app(config_class=Config):
    """Create and configure the Flask application."""
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    # Enable CORS
    CORS(app)
    
    # Initialize Flask-RESTful
    api = Api(app)
    
    # Register blueprints
    from app.blueprints.main import main_bp
    from app.blueprints.services import services_bp
    from app.blueprints.about import about_bp
    from app.blueprints.contact import contact_bp
    
    app.register_blueprint(main_bp)
    app.register_blueprint(services_bp, url_prefix='/services')
    app.register_blueprint(about_bp, url_prefix='/about')
    app.register_blueprint(contact_bp, url_prefix='/contact')
    
    # Register error handlers
    @app.errorhandler(404)
    def page_not_found(e):
        return {"error": "Page not found"}, 404
    
    @app.errorhandler(500)
    def internal_server_error(e):
        return {"error": "Internal server error"}, 500
    
    return app 