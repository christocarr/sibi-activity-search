import React from "react";
import Select from "react-select";

const ActivityCatSelect = ({ typeOptions, handleChange }) => {
  return (
    <div>
      <Select options={typeOptions} onChange={handleChange} />
    </div>
  );
};

export default ActivityCatSelect;
