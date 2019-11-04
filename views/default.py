import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output, State
import json

app.layout = html.Div([
    dcc.Location(id='url', refresh=False),
    html.Pre("URL:"),
    html.Pre('{"name":"none"}', id="app_info"),
    html.Pre("Select a city:"),
    dcc.RadioItems(
        options=[
            {'label': 'New York City', 'value': 'NYC'},
            {'label': 'Montréal', 'value': 'MTL'},
            {'label': 'San Francisco', 'value': 'SF'}
        ],
        value='MTL',
        id="radio"
    )
])


@app.callback(Output('radio', 'value'), [Input('com_in', 'value')])
def display_output(value):
    if value == "{}":
        return "MTL"
    message = json.loads(value)
    # Implement condition to check if the id of the field matches the id of the output object
    return message["value"]


@app.callback(Output('com_out', 'value'), [Input('radio', 'value')], [State('app_info', 'children')])
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


@app.callback(Output('app_info', 'children'), [Input('url', 'pathname'), Input('url', 'search')])
def get_app_info(pathname, search):
    if not search:
        search = ""
    parsed_url = urlparse(search)
    parsed_qs = parse_qs(parsed_url.query)
    parsed_qs["path"] = pathname
    return json.dumps(parsed_qs)
