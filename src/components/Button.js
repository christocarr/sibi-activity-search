import React from "react";

const Button = props => {
  return (
    <div>
      <button className="" onClick={props.handleClick}>
        Show Activities
      </button>
    </div>
  );
};

export default Button;
