from flask import Flask
import logging
import os

def create_app():
    """
    Create the flask app.

    Create the database for the app to use. Set up the format for 
    logging and begin logging.

    Returns
    -------
    object
        the flask app is returned.

    """

    app = Flask("__name__")
    app.app_context().push()
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    from .models.models import db
    db.init_app(app)
    with app.app_context():
        db.create_all()

    # set up logging
    logging.basicConfig(level=logging.DEBUG, format='%(asctime)s.%(msecs)03d %(levelname)s:\t%(message)s',
                        datefmt='%Y-%m-%d %H:%M:%S')
    log = logging.getLogger(__name__)
    return app
