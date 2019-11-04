import React, { memo } from "react";
import classes from "./PanelsList.module.css";
import { TriangleIcon } from "components/Icons";
import useToggle from "hooks/useToggle";

const PanelsList = ({ children }) => {
  const [isOpen, toggle] = useToggle();
  const style = isOpen ? undefined : { width: 0, minWidth: 0 };

  return (
    <div className={classes.PanelsList}>
      <div className={classes.Panels + " customScrollBar"} style={style}>
        {children}
      </div>
      <div className={classes.PanelsToggle} onClick={toggle}>
        <TriangleIcon transform={`rotate(${isOpen ? "180" : "0"})`} />
      </div>
    </div>
  );
};

export default memo(PanelsList);
