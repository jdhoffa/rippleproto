import React, { useContext, memo } from "react";
import { viewsContext } from "contexts/viewsContext";

const DropZone = ({ view, vertical }) => {
  const { dispatch } = useContext(viewsContext);
  const dragOver = ev => {
    ev.preventDefault();
  };
  const dragEnter = ev => {
    const elem = ev.target;
    setTimeout(() => elem.classList.add("active"), 1);
  };

  const dragLeave = ev => {
    const elem = ev.target;
    setTimeout(() => elem.classList.remove("active"), 1);
  };

  const drop = ev => {
    if (ev.preventDefault) ev.preventDefault();
    if (ev.stopPropagation) ev.stopPropagation();

    const dragged = ev.dataTransfer.getData("text");
    const to = ev.target.getAttribute("view");
    const pos = ev.target.getAttribute("pos");
    if (!dragged || !to || !pos) return;

    // Prevent Highlight bug (staying on area after drop)
    setTimeout(() => {
      const MainView = document.getElementById("MainView");
      MainView.classList.remove("drag");

      const allDropZones = MainView.querySelectorAll(".drop-zone div");
      allDropZones.forEach(el => el.classList.remove("active"));

      const draggable = MainView.querySelectorAll(".drag");
      draggable.forEach(el => el.classList.remove("drag"));
    }, 1);
    dispatch({ type: "MOVE_VIEW", dragged, to, pos, vertical });
  };
  return (
    <div className="drop-zone">
      {["center", "top", "right", "bottom", "left"].map(el => (
        <div
          className={el}
          key={el}
          view={view}
          pos={el}
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={drop}
        />
      ))}
    </div>
  );
};

export default memo(DropZone);
