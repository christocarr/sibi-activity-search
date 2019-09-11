import React from 'react'

const ActivityTimes = ({ times }) => {
  const { MondayStart, MondayEnd, TuesdayStart, TuesdayEnd,
    WednesdayStart, WednesdayEnd, ThursdayStart, ThursdayEnd,
  FridayStart, FridayEnd, SaturdayStart, SaturdayEnd ,
  SundayStart, SundayEnd } = times
  
  return (
    <div className="times">
      {MondayStart && <p><span className="bold">Monday:</span> {MondayStart} - {MondayEnd}</p>}
      {TuesdayStart && <p><span className="bold">Tuesday:</span> {TuesdayStart} - {TuesdayEnd}</p>}
      {WednesdayStart && <p><span className="bold">Wednesday:</span> {WednesdayStart} - {WednesdayEnd}</p>}
      {ThursdayStart && <p><span className="bold">Thursday:</span> {ThursdayStart} - {ThursdayEnd}</p>}
      {FridayStart && <p><span className="bold">Friday:</span> {FridayStart} - {FridayEnd}</p>}
      {SaturdayStart && <p><span className="bold">Saturday:</span> {SaturdayStart} - {SaturdayEnd}</p>}
      {SundayStart && <p><span className="bold">Sunday:</span> {SundayStart} - {SundayEnd}</p>}
    </div>
  )
}

export default ActivityTimes