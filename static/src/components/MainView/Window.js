import React, { memo } from "react";
import classes from "./styles/Window.module.css";
import DropZone from "./DropZone";
import WindowTitle from "./WindowTitle";
import getTitleFromView from "utils/getTitleFromView";

const Window = ({ view, vertical }) => {
	return (
		<div className={"Window " + classes.Window} view={view}>
			<WindowTitle view={view} />
			<div className={classes.WindowContent}>
				This is now longer an iframe
				{/* <iframe src="dashapp/test?id=if_left" title="Test" /> */}
				{/* {getTitleFromView(view)} */}
			</div>
			<DropZone view={view} vertical={vertical} />
		</div>
	);
};

export default memo(Window);
