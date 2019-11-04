import flask
from flask import Flask, request, send_from_directory
import dash

server = Flask(__name__,  static_url_path='',
               static_folder='public/static',
               template_folder="public/templates")


@server.route('/')
def index():
    return flask.render_template("index.html")


# # Handles the api calls
# @server.route('/api/<path:path>')
# def send_js(path):
#     return send_from_directory('static/build/api', path)


# Stylesheets for Dash
external_stylesheets = [
    # "../static/css/bulma.css",
    "./res/css/dash_addon.css"
]

external_scripts = [
    "./res/js/prop-types.js"  # Useful for prop type declaration in react
]

app = dash.Dash(
    __name__,
    server=server,
    routes_pathname_prefix='/dashapp/',
    external_stylesheets=external_stylesheets,
    external_scripts=external_scripts,
    show_undo_redo=False
)

# We are adding callbacks that are not used in the app
app.config.suppress_callback_exceptions = True

# External styling used in our dash app
app.css.append_css({'external_url': (
    'cdn.jsdelivr.net/gh/lwileczek/Dash@master/v5.css'
)})
