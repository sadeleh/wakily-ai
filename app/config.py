import os

class Config:
    """Base configuration class."""
    SECRET_KEY = os.environ.get('SECRET_KEY', 'dev_key_for_wakily')
    JSON_AS_ASCII = False  # Ensures proper rendering of non-ASCII characters (Arabic)
    DEBUG = False
    TESTING = False

class DevelopmentConfig(Config):
    """Development configuration."""
    DEBUG = True

class TestingConfig(Config):
    """Testing configuration."""
    TESTING = True

class ProductionConfig(Config):
    """Production configuration."""
    SECRET_KEY = os.environ.get('SECRET_KEY')  # Must be set in production

# Use environment variable to determine which config to use
config_map = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig
}

Config = config_map.get(os.environ.get('FLASK_ENV', 'development'), DevelopmentConfig) 