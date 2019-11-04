import flatten from "utils/flatten";
import flattenUnneeded from "utils/flattenUnneeded";
import compact from "utils/compact";

const REMOVE_VIEW = (grid, { view }) => {
  let newGrid = [...flatten(grid)];
  newGrid = newGrid.filter(v => v !== view);
  return flattenUnneeded(compact(newGrid));
};

export default REMOVE_VIEW;
