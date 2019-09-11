import React from 'react'

const Cost = ({ cost }) => {
  return (
    <div>
      {cost ? <p>Cost: {cost}</p>
      : null
      }
    </div>
  )
}

export default Cost