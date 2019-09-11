import React from 'react'

const Accessibility = ({ info }) => {
  return (
    <div className="accessibility">
      {info ? <p><span className="bold">Accessibility:</span> {info}</p>
        : null
      }
    </div>
  )
}

export default Accessibility