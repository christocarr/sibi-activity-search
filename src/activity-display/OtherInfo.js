import React from 'react'

const OtherInfo = ({ otherInfo }) => {
  return (
    <div>
      {otherInfo ? <p>{otherInfo}</p> : null}
    </div>
  ) 
}

export default OtherInfo