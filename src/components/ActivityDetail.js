import React from "react"

const ActivityDetail = ({ results }) => {

  const renderedList = results.map((obj, index) => {
    return (
      <li key={index}>
        <div className="service-container">
          <h4>{obj.NameOfService}</h4>
          <div className="address">
            <p>{obj.AddressLine1}</p>
            <p>{obj.AddressLine2}</p>
            <p>{obj.AddressLine3}</p>
            <p>{obj.Postcode}</p>
          </div>
          <p>{obj.OtherDetailedInformation}</p>
          <div className="times">
            <p>{}</p>
          </div>
          <p>Cost: {obj.Cost}</p>
          <div className="transport">
            <p className="section-heading">Transport:</p>
            <p>Buses: {obj.Buses}</p>
            <p>Tube and Trains: {obj.TubeAndTrains}</p>
            <p>Car Park Availability: {obj.CarParkingDetails}</p>
          </div>
          <div className="accessibility">
            <p>Accessibility: {obj.AccessibilityDetails}</p>
          </div>
          <div className="contact-details">
            <p className="section-heading">Contact Details:</p>
            <div className="name-number"><p>{obj.Name1}:</p><p>{obj.PhoneNumber1};</p><p>{obj.Email1}; {obj.Email2}</p>
            </div>
            <a href="{obj.Website}">{obj.Website}</a>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul>
        {renderedList}
      </ul>
    </div>
  );
};

export default ActivityDetail;
