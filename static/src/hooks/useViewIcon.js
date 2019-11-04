import { useContext } from "react";
import { viewsContext } from "contexts/viewsContext";
import flatten from "utils/flatten";

const useViewIcon = ({ view_type, view_id }) => {
  const { grid, dispatch } = useContext(viewsContext);
  const view = `${view_type}.${view_id}`;
  const isViewActive = flatten(grid).find(item => item === view);
  const toggleView = () => dispatch({ type: isViewActive ? "REMOVE_VIEW" : "ADD_VIEW", view });
  return [isViewActive, toggleView];
};

export default useViewIcon;
