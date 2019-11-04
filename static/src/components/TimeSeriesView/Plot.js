import React, { memo } from "react";
import classes from "./Plot.module.css";
import PlotItem from "./PlotItem";

const Plot = ({ id, label, content, remove }) =>
  content.length > 0 ? (
    <div className={classes.Plot}>
      <h5>{label}</h5>
      <div className={classes.PlotContent}>
        {content.map((item, i) => (
          <PlotItem item={item} i={i} remove={remove} id={id} key={item} />
        ))}
      </div>
    </div>
  ) : null;

export default memo(Plot);
