import React from "react"
import { Link } from 'react-router-dom'
import NameOfService from '../activity-display/NameOfService'
import Address from '../activity-display/Address'
import OtherInfo from '../activity-display/OtherInfo'
import ActivityTimes from '../activity-display/ActivityTimes'
import Cost from '../activity-display/Cost'
import Accessibility from '../activity-display/Accessibility'
import ContactDetails from '../activity-display/ContactDetails'

const ActivityDetail = ({ results, clickPrint, town }) => {
  let filteredList = []

  // filter search results by date last check is no later than 18 months
  filteredList = results.filter(item => {
    const dateNow = Date.now()
    // eighteen months in unix/epoch time in milliseconds
    const eighteenMonths = 47304051840
    // convert date on sheet to valid format
    let dateString = item.dateLastChecked
    let dateParts = dateString.split('/')
    let itemDate = new Date(+dateParts[2], dateParts[1] - 1, dateParts[0])
    //parse sheet date to Unix time 
    itemDate = Date.parse(itemDate)
    const dateDiff = dateNow - itemDate
    return dateDiff <= eighteenMonths
  })

  //filter list by town name
  filteredList = filteredList.filter(obj => {
    return obj.Town.toLowerCase().indexOf(town.toLowerCase()) !== -1
  })

  const renderedList = filteredList.map((obj, index) => {
    
    return (
      <li key={index}>
        <div className="service-container">
          <NameOfService NameOfService={obj.NameOfService} />
          <Address obj={obj} />
          <OtherInfo otherInfo={obj.OtherDetailedInformation}/>
          <ActivityTimes times={obj} />
          <Cost cost={obj.Cost} />
          <div className="transport">
            <p className="section-heading">Transport:</p>
            <p>Buses: {obj.Buses}</p>
            <p>Tube and Trains: {obj.TubeAndTrains}</p>
            <p>Car Park Availability: {obj.CarParkingDetails}</p>
          </div>
          <Accessibility info={obj.AccessibilityDetails} />
          <ContactDetails contact={obj} />
          <Link to="/pdf" target="_blank" className="print-button-container">
            <button 
              className="print-button" 
              onClick={() => clickPrint(obj)} 
            >Print</button>
          </Link>
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
