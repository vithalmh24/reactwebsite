import React from 'react'

const Footer = () => {
const CurrentYear=new Date().getFullYear();
return (
    <footer>
       <p>All Rights Reserved - @copyright {CurrentYear}</p>
    </footer>
  )
}

export default Footer