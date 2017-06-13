from flask import Blueprint

api = Blueprint('api', __name__)

from .import dae_api
