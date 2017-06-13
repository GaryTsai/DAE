import logging

from logging.handlers import RotatingFileHandler


class BasicConfig(object):
    SECRET_KEY = '421d7fa062a76ca25669e91923a3c79f'
    #SQLALCHEMY_COMMIT_ON_TEARDOWN = True
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    SQLALCHEMY_RECORD_QUERIES = True

    @staticmethod
    def init_app(app):
        _handler = RotatingFileHandler('app.log',
                                       maxBytes=10000,
                                       backupCount=1)

        _handler.setLevel(logging.WARNING)
        app.logger.addHandler(_handler)


class DevelopmentConfig(BasicConfig):
    DEBUG = True

    SQLALCHEMY_DATABASE_URI = 'mysql://root:kDd414o6@localhost/dae'
    SQLALCHEMY_ECHO = True
   # SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or \
   #     'sqlite:///' + os.path.join(basedir, 'data-dev.sqlite')


class TestingConfig(BasicConfig):
    pass


class ProductionConfig(BasicConfig):
    pass


config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
