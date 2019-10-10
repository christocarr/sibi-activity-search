import React from "react";
import Select from "react-select";

const activityCatOptions = [
  { value: "Activity (art & craft)", label: "Art & craft" },
  { value: "Activity (social)", label: "Social" },
  { value: "Activity (wellbeing)", label: "Wellbeing" },
  { value: "Activity (board & card games)", label: "Board and card games" },
  { value: "Activity (music & drama)", label: "Music and drama" },
  { value: "Activity (sport & active games)", label: "Sports and active games" },
  { value: "Learning topic", label: "Learning" },
  { value: "Advice category", label: "Advice" }
];

const ActivityCatSelect = ({ handleChange, value }) => {
  return (
    <div className="select-container">
      <p>Category</p>
      <Select options={activityCatOptions} onChange={handleChange} value={value} />
    </div>
  )
}
    
export default ActivityCatSelect;
