import flask
from flask import Flask
import dash
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output, State
from werkzeug.utils import find_modules, import_string
import ripplecomin as ripin
import ripplecomout as ripout
import json
from urllib.parse import urlparse, parse_qs

# Importing the server
from server import app, server

# Importing the template views
import views
from views import test


# Collects the queries passed to Dash
app.layout = html.Div([
    dcc.Location(id='url', refresh=False),
    html.Pre("URL:"),
    html.Pre('{"name":"none","view":"none"}', id="app-info"),
    # Custom Dash widgets that communicate with the sidebar
    ripin.RippleComIn(  # Incoming
        id='com_in',
        value='{}',
        label='No label'
    ),
    ripout.RippleComOut(  # Outgoing
        id="com_out",
        value='No info',
        label='No label'
    ),
    html.Div(id="app-content")
])


# Parses the query
@app.callback(Output('app-info', 'children'), [Input('url', 'pathname'), Input('url', 'search')])
def get_app_info(pathname, search):
    if not search:
        search = ""
    if not pathname:
        pathname = ""
    parsed_url = urlparse(search)
    parsed_qs = parse_qs(parsed_url.query)
    parsed_qs["view"] = pathname.replace("/dashapp/", "")
    if ("id" in parsed_qs):
        parsed_qs["id"] = parsed_qs["id"][0]
    return json.dumps(parsed_qs)

# Loads the view
@app.callback(Output('app-content', 'children'),
              [Input('url', 'pathname')])
def load_app(pathname):
    if not pathname:
        pathname = ""
    if ("/dashapp/" in pathname):
        view = pathname.replace("/dashapp/", "")
        if view == "test":
            return views.test.layout

    return ""
