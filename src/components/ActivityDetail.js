import React from "react"
import NameOfService from '../activity-display/NameOfService'
import Address from '../activity-display/Address'
import OtherInfo from '../activity-display/OtherInfo'

const ActivityDetail = ({ results }) => {

  const renderedList = results.map((obj, index) => {

    return (
      <li key={index}>
        <div className="service-container">
          <NameOfService NameOfService={obj.NameOfService} />
          <Address obj={obj} />
          <OtherInfo otherInfo={obj.OtherDetailedInformation}/>
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
