import React from "react";
import Window from "./Window";
import Handler from "./Handler";
import classes from "./styles/Grid.module.css";

const Grid = ({ grid, vertical }) => {
  const template = grid
    .filter(Boolean)
    .map(() => "1fr")
    .join(" 4px ");
  const style = { gridTemplate: `${template} / ${template}` };
  if (grid.length === 1) {
    if (Array.isArray(grid[0])) return <Grid grid={grid[0]} vertical={!vertical} />;
    if (typeof grid[0] === "string") return <Window view={grid[0]} vertical={vertical} />;
  }
  return (
    <div className={`${classes.Grid} grid-${vertical ? "cols" : "rows"}`} style={style}>
      {typeof grid[0] === "string" && <Window view={grid[0]} vertical={vertical} />}
      {Array.isArray(grid[0]) && <Grid grid={grid[0]} vertical={!vertical} />}

      {grid[1] && <Handler view={grid[0]} vertical={vertical} />}
      {typeof grid[1] === "string" && <Window view={grid[1]} vertical={vertical} />}
      {Array.isArray(grid[1]) && <Grid grid={grid[1]} vertical={!vertical} />}
    </div>
  );
};

export default Grid;
