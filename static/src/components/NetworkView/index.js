import React from "react";
import Form from "components/Form";
import useFetch from "hooks/useFetch";

const NetworkView = () => {
  const [loading, data, error, updateData] = useFetch("api/NetworkView.json");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleChange = ({ target: { name, value } }) => updateData({ [name]: value });

  const renderOptions = arr =>
    arr.map((opt, i) => (
      <option key={i} value={opt} disabled={opt === ""}>
        {opt === "" ? "No Selection" : opt}
      </option>
    ));

  return (
    <Form>
      <label>Data</label>
      <select required value={data.data} onChange={handleChange} name="data">
        {renderOptions(data.data_options)}
      </select>

      <label>Node Label</label>
      <select required value={data.nLabel} onChange={handleChange} name="nLabel">
        {renderOptions(data.nLabel_options)}
      </select>

      <label>Node Colour</label>
      <select required value={data.nColour} onChange={handleChange} name="nColour">
        {renderOptions(data.nColour_options)}
      </select>

      <label>Node Opacity</label>
      <select required value={data.nOpacity} onChange={handleChange} name="nOpacity">
        {renderOptions(data.nOpacity_options)}
      </select>

      <label>Node Size</label>
      <select required value={data.nSize} onChange={handleChange} name="nSize">
        {renderOptions(data.nSize_options)}
      </select>

      <label>Line Width</label>
      <select required value={data.lWidth} onChange={handleChange} name="lWidth">
        {renderOptions(data.lWidth_options)}
      </select>

      <label>Link Opacity</label>
      <select required value={data.lOpacity} onChange={handleChange} name="lOpacity">
        {renderOptions(data.lOpacity_options)}
      </select>
      <div className="delete-button">DELETE VIEW</div>
    </Form>
  );
};

export default NetworkView;
