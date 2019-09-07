import React from "react";
import Select from "react-select";

const activityCatOptions = [
  { value: "Activity (art & craft)", label: "art & craft" },
  { value: "Activity (social)", label: "social" },
  { value: "Activity (wellbeing)", label: "wellbeing" }
];

const ActivityCatSelect = ({ handleChange }) => {
  return (
    <div>
      <Select options={activityCatOptions} onChange={handleChange} />
    </div>
  );
};

export default ActivityCatSelect;
