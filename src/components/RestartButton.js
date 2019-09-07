import React from "react";

const RestartButton = ({ handleRestartSearch }) => {
  return (
    <div>
      <button onClick={handleRestartSearch}>Restart Search</button>
    </div>
  );
};

export default RestartButton;
