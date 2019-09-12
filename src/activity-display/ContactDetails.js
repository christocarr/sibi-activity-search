import React from 'react'

const ContactDetails = ({ contact }) => {
  const { Name1, PhoneNumber1, Email1, Name2, PhoneNumber2, Email2, Website, OtherContactInfo } = contact
  return (
    <div className="contact-details">
      <p className="section-heading">Contact Details:</p>
      <div className="name-number">
        <p>{Name1}:</p> {PhoneNumber1 ? <p>{PhoneNumber1};</p> : null}
        {Email1 ? <p>{Email1};</p> : null}
        {Name2 ? <p>{Name2}:</p> : null} 
        {PhoneNumber2 ? <p>{PhoneNumber2};</p> : null}
        {Email2 ? <p>{Email2};</p> : null}
        <div>
          {Website ? <a href={Website} target="_blank">{Website}</a> : null}
          {OtherContactInfo ? <a href={OtherContactInfo} target="_blank">{OtherContactInfo}</a> : null}
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
