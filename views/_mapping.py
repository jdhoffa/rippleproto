import json
import glob


def save_map(name, inputs):
    with open("public/static/views.json", "r+") as f:
        views = json.loads(f.read())
        views["_"+name] = inputs
        f.seek(0)
        f.write(json.dumps(views))
        f.truncate()
