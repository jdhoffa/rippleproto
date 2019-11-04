# Ripple: Network visualisation prototype

This implementation makes use of React and Dash. A sidebar, designed in React, interacts with a multipage Dash app to load up different views.

## Folder Structure

-   `ripple.py`: File calling up py scripts that have been written to enable Dash to React in browser communication
-   `app.py`: Initializes the flask server on which the whole application is running as well as the embeded dash framework
-   `templates/`: Folder containing the index.html that is served when the dashboard is called up in the browser
-   `static/`: Contains all the static files that the flask server dynamically loads
-   `ripplecomin/` & `ripplecomout`: Custom Dash widgets to communicate within the browser window with the React app.

## Running the dashboard

```
$ export FLASK_APP=app
$ flask run
```
