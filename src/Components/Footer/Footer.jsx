import React from 'react';
import './Footer.css';
// import transparent_logo from '../../Icons/transparent_logo.svg'

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer">
        <div className="footer-content">
          <p>
            copyright © 2022. All Rights Reserved.
          </p>
          <p>
            Designed by 
            <a href="https://github.com/VBHARDWAJ09" target={"_blank"}> Vishal Bhardwaj</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer;