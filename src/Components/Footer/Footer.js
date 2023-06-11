import React from 'react'

const Footer = () => {
    // date as day month(3 letters) year hour:minute:second (12 hour format)
  const date = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, day: 'numeric', month: 'short', year: 'numeric' })
  
  return (
    <div className='footer'>
      <p>{date}</p>
    </div>
  )
}

export default Footer