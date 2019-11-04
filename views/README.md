# View Templates

This file contains the templates that can be used by Dash

## Template Folder

- `__init__.py` : Python file used to import all the templates in the parent `app.py` file
- `[NAME].py` : Python file containing the layout, the callbacks and the input mapping information

## Template File Composition

The template file is made up of three elements: the input map, the layout and the callbacks.

```python
# Input Map
inputs = [
    {"id":"test-page-radio",
    "property": "options",
    "type": "array"}
]

# Layout
layout = html.Div([
    html.H1('Test Page'),
    dcc.RadioItems(
        id='test-page-radio',
        options=["None"],
        value='None'
    ),
    html.Pre("The output is:"),
    html.Div(id='test-page-content')
])

# Callbacks
@app.callback(Output('test-page-radio', 'options'), [Input('com_in', 'value')], [State('test-page-radio', 'options')])
def test_page_options(value, options):
    message = json.loads(value)
    if ("test-page-radio" in message):
        return message["test-page-radio"]
    else:
        return options

@app.callback(Output('test-page-content', 'children'),
              [Input('test-page-radios', 'value')])
def test_page_radios(value):
    return 'You have selected "{}"'.format(value)

```

The id of the elements in the layout must **always** begin with "[TEMPLATE NAME]"

### Input Map

The input map is an array of objects that specify:

- the `id` of the element that can be modified by the sidebar
- the `property` of the element that will be changed
- the `type` of variable this element can receive.

Possible properties: value, children, options
Possible types: array, bool, func, number, object, string, symbol

Example:
An `array` type could be used for the `options` property of a drop dropdown list

```
array = [
    {'label': "red", 'value': "red"},
    {'label': "blue", 'value': "blue"}
    {'label': "green", 'value': "green"}
]
```
