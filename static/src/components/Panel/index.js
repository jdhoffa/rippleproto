import React, { memo } from "react";
import classes from "./Panel.module.css";
import * as Icons from "components/Icons";
import { TriangleIcon } from "components/Icons";
import useToggle from "hooks/useToggle";
import useViewIcon from "hooks/useViewIcon";
import draggableToDock from "utils/draggableToDock";

const Panel = ({ title, subTitle, flexOpen, icon, open, ...props }) => {
  const [isOpen, toggle] = useToggle(open);
  const [isViewActive, toggleView] = useViewIcon(props);
  const PanelStyles = flexOpen && isOpen ? { flex: 1, minHeight: 0 } : undefined;
  let ContentStyles = isOpen ? {} : { height: 0 };
  ContentStyles =
    flexOpen && isOpen ? { height: "calc(100% - 1.25rem)", ...ContentStyles } : ContentStyles;
  const SideIcon = Icons[icon];
  return (
    <div className={classes.Panel} style={PanelStyles}>
      <div className={classes.PanelTitle} onClick={SideIcon ? null : toggle}>
        <TriangleIcon
          transform={`rotate(${isOpen ? "90" : "0"})`}
          onClick={SideIcon ? toggle : null}
        />
        <span onClick={SideIcon ? toggle : null}>
          <h5>{title}</h5>
          <h6>{subTitle}</h6>
        </span>
        {SideIcon && (
          <div
            {...draggableToDock(`${props.view_type}.${props.view_id}`)}
            onClick={toggleView}
            draggable={!isViewActive}
          >
            <SideIcon className={isViewActive ? classes.IconActive : ""} />
          </div>
        )}
      </div>
      <div className={classes.PanelContent} style={ContentStyles}>
        {props.children}
      </div>
    </div>
  );
};

export default memo(Panel);
