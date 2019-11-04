import React, { memo } from "react";
import classes from "./PlotItem.module.css";

const PlotItem = ({ item, i, id, remove }) => {
  const clickRemove = () => remove(id, i);
  return (
    <div className={classes.PlotItem}>
      <b onClick={clickRemove}>X</b>
      <span>{item}</span>
    </div>
  );
};

export default memo(PlotItem);
