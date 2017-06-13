from flask import Flask
from config import config
from flask_sqlalchemy import SQLAlchemy

#bootstrap = Bootstrap()
db = SQLAlchemy(use_native_unicode='utf8')

def create_app(config_name):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object(config[config_name])
    app.config.from_pyfile('config.cfg', silent=True)
    config[config_name].init_app(app)

    #bootstrap.init_app(app)
    db.init_app(app)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)
    
    from .api_1_0 import api as api_1_0_blueprint
    app.register_blueprint(api_1_0_blueprint, url_prefix='/api/v1.0')

    return app