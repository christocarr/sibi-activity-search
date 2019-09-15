import React from "react";
import Select from "react-select";

const ActivityTypeSelect = ({ typeOptions, handleChange }) => {
  return (
    <div className="select-container">
      <p>Type</p>
      <Select options={typeOptions} onChange={handleChange} />
    </div>
  );
};

export default ActivityTypeSelect;
