import React from 'react'

const Footer = () => {
const CurrentYear=new Date().getFullYear();
return (
    <footer>
       <p>- @copyright {CurrentYear}</p>
    </footer>
  )
}

export default Footer