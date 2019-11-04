import React, { useContext } from "react";
import { viewsContext } from "contexts/viewsContext";
import Grid from "./Grid";
import "./styles/MainView.css";

const MainView = () => {
  const { grid } = useContext(viewsContext);
  return (
    <div id="MainView">
      <Grid grid={grid} vertical />
    </div>
  );
};

export default MainView;
