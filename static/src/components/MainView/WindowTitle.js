import React, { memo } from "react";
import classes from "./styles/Window.module.css";
import { CircleIcon } from "components/Icons";
import getTitleFromView from "utils/getTitleFromView";
import draggableToDock from "utils/draggableToDock";

const WindowTitle = ({ view }) => {
  return (
    <div className={"WindowTitle " + classes.WindowTitle} view={view} {...draggableToDock(view)}>
      <CircleIcon height="8" />
      <h5>{getTitleFromView(view)}</h5>
    </div>
  );
};

export default memo(WindowTitle);
