import React from "react";
import classes from "./TimeSeriesView.module.css";
import useFetch from "hooks/useFetch";
import Plot from "./Plot";

const TimeSeriesView = ({ view_id }) => {
  const [loading, data, error, updateData] = useFetch(`api/time_series${view_id}.json`);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const remove = (id, i) => {
    const newData = [...data];
    id = newData.findIndex(item => item.id === id);
    newData[id].content.splice(i, 1);
    updateData(newData);
  };

  return (
    <div className={classes.TimeSeriesView}>
      <div className={classes.AddPlot}>+</div>
      {data.map(plot => (
        <Plot {...plot} remove={remove} key={plot.id} />
      ))}
      <div className="delete-button">DELETE VIEW</div>
    </div>
  );
};

export default TimeSeriesView;
