import cleanArray from "utils/cleanArray";
import reduceBrackets from "utils/reduceBrackets";

const MOVE_VIEW = (grid, action) => {
  let { dragged, to, pos, vertical } = action;
  let stringGrid = JSON.stringify(grid)
    .replace(/\s/, "")
    .replace(`"${dragged}"`, "$from")
    .replace(`"${to}"`, "$to");
  if (pos === "center") {
    stringGrid = stringGrid.replace("$from", `"${to}"`).replace("$to", `"${dragged}"`);
    return JSON.parse(stringGrid);
  }
  stringGrid = stringGrid.replace("$from", "null");
  let newGrid = [];
  if (pos === "left" || pos === "top") newGrid = [dragged, to];
  else newGrid = [to, dragged];

  if (
    (vertical && (pos === "left" || pos === "right")) ||
    (!vertical && (pos === "top" || pos === "bottom"))
  )
    newGrid = [newGrid];

  stringGrid = stringGrid.replace("$to", JSON.stringify(newGrid));

  grid = cleanArray(JSON.parse(stringGrid));
  return reduceBrackets(grid);
};

export default MOVE_VIEW;
