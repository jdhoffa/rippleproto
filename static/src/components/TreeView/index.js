import React from "react";
import classes from "./TreeView.module.css";
import List from "./List";
import useFetch from "hooks/useFetch";

const TreeView = () => {
  const [loading, data, error] = useFetch(`api/tree_view.json`);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className={classes.TreeView + " customScrollBar"}>
      {data.map(item => (
        <List key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default TreeView;
