import React from "react";
import Select from "react-select";

const ActivityCatSelect = ({ typeOptions, handleChange }) => {
  return (
    <div className="select-container">
      <p>Type</p>
      <Select options={typeOptions} onChange={handleChange} />
    </div>
  );
};

export default ActivityCatSelect;
