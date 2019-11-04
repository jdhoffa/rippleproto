import ADD_VIEW from "./actions/ADD_VIEW";
import REMOVE_VIEW from "./actions/REMOVE_VIEW";
import MOVE_VIEW from "./actions/MOVE_VIEW";

const storeReducer = (grid, action) => {
  switch (action.type) {
    case "ADD_VIEW":
      return ADD_VIEW(grid, action);
    case "REMOVE_VIEW":
      return REMOVE_VIEW(grid, action);
    case "MOVE_VIEW":
      return MOVE_VIEW(grid, action);
    default:
      return grid;
  }
};

export default storeReducer;
