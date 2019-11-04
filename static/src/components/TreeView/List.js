import React from "react";
import useToggle from "hooks/useToggle";
import { TriangleIcon } from "components/Icons";

const List = ({ label, content, open }) => {
  const notEmpty = content && content.length > 0;
  const [isOpen, toggle] = useToggle(open);
  const Label = notEmpty ? (isOpen ? "b" : "span") : "i";

  return (
    <li>
      <div onClick={toggle}>
        {notEmpty ? <TriangleIcon transform={`rotate(${isOpen ? "90" : "0"})`} /> : <u>A</u>}
        <Label>{label}</Label>
      </div>

      {notEmpty ? (
        <ul style={{ display: isOpen ? "block" : "none" }}>
          {content.map(item => (
            <List key={item.id} {...item} />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default List;
