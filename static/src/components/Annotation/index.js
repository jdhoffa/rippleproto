import React from "react";
import Form from "components/Form";
import useFetch from "hooks/useFetch";

const Annotation = () => {
  const [loading, data, error, updateData] = useFetch("api/annotation.json");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleChange = ({ target: { name, value } }) => updateData({ [name]: value });

  return (
    <Form>
      <label>Title</label>
      <input type="text" value={data.title} onChange={handleChange} name="title" />

      <label>From Time</label>
      <input type="text" value={data.time_start} onChange={handleChange} name="time_start" />

      <label>To Time</label>
      <input type="text" value={data.time_end} onChange={handleChange} name="time_end" />

      <label>Collection</label>
      <input type="text" value={data.collection} onChange={handleChange} name="collection" />

      <label>Series</label>
      <input type="text" value={data.series} onChange={handleChange} name="series" />

      <label>From Node</label>
      <input type="text" value={data.from_node} onChange={handleChange} name="from_node" />

      <label>To Node</label>
      <input type="text" value={data.to_node} onChange={handleChange} name="to_node" />

      <label>Description</label>
      <textarea
        className="customScrollBar"
        rows="5"
        name="description"
        value={data.description}
        onChange={handleChange}
      />
    </Form>
  );
};

export default Annotation;
