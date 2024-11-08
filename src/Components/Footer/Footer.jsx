import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import insta_icon from '../Assets/instagram_icon.png'
import pin_icon from '../Assets/pintester_icon.png'
 const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={insta_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pin_icon} alt="" />
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @2023 all rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer