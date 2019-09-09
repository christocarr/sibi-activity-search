import React from "react";
import Select from "react-select";

const activityCatOptions = [
  { value: "Activity (art & craft)", label: "Art & craft" },
  { value: "Activity (social)", label: "Social" },
  { value: "Activity (wellbeing)", label: "Wellbeing" }
];

const ActivityCatSelect = ({ handleChange }) => {
  return (
    <div>
      <p>Category</p>
      <Select options={activityCatOptions} onChange={handleChange} />
    </div>
  );
};

export default ActivityCatSelect;
