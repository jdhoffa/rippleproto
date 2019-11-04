import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output, State
from server import app
import json
from views import _mapping

inputs = [
    {"id": "test-page-radio",
     "property": "options",
     "type": "array"}
]

# Saving the mapping to a json
_mapping.save_map("test", inputs)

# Layout
layout = html.Div([
    html.H1('Test Page'),
    dcc.RadioItems(
        id='test-page-radio',
        options=[{'label': 'New York City', 'value': 'NYC'},
                 {'label': 'Montréal', 'value': 'MTL'},
                 {'label': 'San Francisco', 'value': 'SF'}],
        value='MTL'
    ),
    dcc.Dropdown(
        options=[
            {'label': 'New York City', 'value': 'NYC'},
            {'label': 'Montréal', 'value': 'MTL'},
            {'label': 'San Francisco', 'value': 'SF'}
        ],
        multi=True,
        value="MTL"
    ),
    html.Pre("The output is:"),
    html.Div(id='test-page-content')
])

# Callbacks
# Handle input
@app.callback(Output('test-page-radio', 'options'), [Input('com_in', 'value')], [State('test-page-radio', 'options')])
def test_page_options(value, options):
    message = json.loads(value)
    if ("test-page-radio" in message):
        return message["test-page-radio"]
    return options


@app.callback(Output('test-page-radio', 'value'), [Input('test-page-radio', 'options')], [State('test-page-radio', 'value')])
def test_page_options(options, value):
    if not any(d['value'] == value for d in options):
        return ""
    return value

@app.callback(Output('test-page-content', 'children'),
              [Input('test-page-radio', 'value')])
def test_page_radios(value):
    return 'You have selected "{}"'.format(value)


@app.callback(Output('com_out', 'value'), [Input('radio', 'value')], [State('app-info', 'children')])
def tell_app(value, app_info):
    info = json.loads(app_info)
    if(not "id" in info):
        info['id'] = "none"
    msg = {
        "source": info["id"],
        "target": "master",
        "payload": {
            "radio": value
        }

    }
    return json.dumps(msg)
