import React from 'react'

const Cost = ({ cost }) => {
  return (
    <div>
      {cost ? <p><span className="bold">Cost:</span> {cost}</p>
      : null
      }
    </div>
  )
}

export default Cost