import React from 'react'
import { NewsLetter,FooterContent } from '../../util'
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-newsletter">
        <NewsLetter/>
      </div>
      
      <div className="footer-content">
        <FooterContent/>
      </div>
    </div>
  )
}

export default Footer