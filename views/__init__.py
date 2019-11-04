import json
import glob

__all__ = ["default", "test"]


def write_map_file():
    """
    Creates a json to inform React of the available templates
    """
    templates = glob.glob("views/[!_]*.py")
    templates = [path.replace("views/", "").replace(".py", "")
                 for path in templates]
    with open("public/static/views.json", "w") as f:
        f.write(json.dumps({
            "templates": templates
        }))


write_map_file()
