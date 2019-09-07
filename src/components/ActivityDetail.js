import React from "react";

const ActivityDetail = ({ results }) => {
  const renderedList = results.map((obj, index) => {
    return (
      <li key={index}>
        <div className="service-name-container">
          <h4>{obj.NameOfService}</h4>
          <p>{obj.AddressLine1}</p>
          <p>{obj.AddressLine2}</p>
          <p>{obj.AddressLine3}</p>
          <p>{obj.Postcode}</p>
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul>{renderedList}</ul>
    </div>
  );
};

export default ActivityDetail;
