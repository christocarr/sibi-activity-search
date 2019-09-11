import React from 'react'

const Address = ({ obj }) => {
  return (
    <div className="address">
      <p>{obj.AddressLine1}</p>
      <p>{obj.AddressLine2}</p>
      <p>{obj.AddressLine3}</p>
      <p>{obj.Postcode}</p>
    </div>
  )
}

export default Address