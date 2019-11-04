import flatten from "utils/flatten";
import flattenUnneeded from "utils/flattenUnneeded";
import compact from "utils/compact";

const ADD_VIEW = (grid, { view }) => {
  let newGrid = [...flatten(grid)];
  newGrid.push(view);
  return flattenUnneeded(compact(newGrid));
};

export default ADD_VIEW;
