import React from 'react'

const ActivityTimes = ({ times }) => {
  const { MondayStart, MondayEnd, TuesdayStart, TuesdayEnd,
    WednesdayStart, WednesdayEnd, ThursdayStart, ThursdayEnd,
  FridayStart, FridayEnd, SaturdayStart, SaturdayEnd ,
  SundayStart, SundayEnd } = times
  
  return (
    <div className="times">
      {MondayStart && <p>Monday: {MondayStart} - {MondayEnd}</p>}
      {TuesdayStart && <p>Tuesday: {TuesdayStart} - {TuesdayEnd}</p>}
      {WednesdayStart && <p>Wednesday: {WednesdayStart} - {WednesdayEnd}</p>}
      {ThursdayStart && <p>Thursday: {ThursdayStart} - {ThursdayEnd}</p>}
      {FridayStart && <p>Friday: {FridayStart} - {FridayEnd}</p>}
      {SaturdayStart && <p>Saturday: {SaturdayStart} - {SaturdayEnd}</p>}
      {SundayStart && <p>Sunday: {SundayStart} - {SundayEnd}</p>}
    </div>
  )
}

export default ActivityTimes