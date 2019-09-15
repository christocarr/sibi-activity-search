import React from 'react'

const PrintButton = ({ obj }) => {
  console.log(obj)
  return (
    <div className="print-button-container">
      <button className="print-button">Print</button>
    </div>
  )
}

export default PrintButton