import React, { useRef, useEffect } from "react";
import classes from "./styles/Handler.module.css";

const Handler = ({ vertical }) => {
  const startPos = useRef(null);
  const oldSize = useRef(null);
  const handlerRef = useRef(null);

  useEffect(() => {
    document.getElementById("MainView").classList.remove("drag");
    const handler = handlerRef.current;
    const parent = handler.parentElement;
    const relatedElem = handler.previousElementSibling;
    const parentSize = vertical ? parent.clientWidth : parent.clientHeight;

    const mouseDown = ev => {
      startPos.current = vertical ? ev.clientX : ev.clientY;
      oldSize.current = vertical ? relatedElem.clientWidth : relatedElem.clientHeight;
      setTimeout(() => document.getElementById("MainView").classList.add("drag"), 1);
    };

    const mouseMove = ev => {
      if (startPos.current !== null) {
        const diff = (vertical ? ev.clientX : ev.clientY) - startPos.current;

        // Calculate the new Value
        let newSize = oldSize.current + diff;
        let minVal = 0.3 * parentSize;
        let maxVal = 0.7 * parentSize;
        if (newSize < minVal) newSize = minVal;
        if (newSize > maxVal) newSize = maxVal;

        // Replace old percent with new one and apply the style
        const template = `minmax(min-content, ${newSize}px) 4px auto`;
        parent.style.gridTemplate = `${template} / ${template}`;
      }
    };

    const mouseUp = () => {
      setTimeout(() => document.getElementById("MainView").classList.remove("drag"), 1);
      startPos.current = null;
      oldSize.current = null;
    };

    handler.addEventListener("mousedown", mouseDown);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
    return () => {
      handler.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };
  });
  return (
    <div className={`${classes.Handler} handler-${vertical ? "cols" : "rows"}`} ref={handlerRef} />
  );
};

export default Handler;
