import React from 'react'
import './Footer.css'
import Footerlogo from './GREENMIND.svg'
import { FacebookLogo,InstagramLogo,TwitterLogo } from 'phosphor-react'

function Footer() {
  return (
    <div className='footer'>

        <div className="left-footer">
            <div className="left-top">
                <div className="left-top-text">
                    <img src={Footerlogo} alt="logo" />
                    <h3>We help you find your dream plant</h3>
                </div>
                <div className="left-top-icons">
                <div className="social-icons">
                    <FacebookLogo size={32}  className='FacebookLogo'/>
                    <InstagramLogo size={32}className='InstagramLogo'/>
                    <TwitterLogo size={32} className='TwitterLogo'/>
                </div>
                </div>
            </div>
            <div className="left-bottom">
                <h3>2023 all Right Reserved Term of use GREENMIND</h3>
            </div>
        </div>


        <div className="right-footer">
            <div className="right-footer-main">
                <div className="information">
                    <h2>Information</h2>
                    <h3>About</h3>
                    <h3>Product</h3>
                    <h3>Blog</h3>
                </div>
                <div className="company">
                    <h2>Company</h2>
                    <h3>Community</h3>
                    <h3>Career</h3>
                    <h3>Our story</h3>
                </div>
                <div className="contact">
                    <h2>Contact</h2>
                    <h3>Getting Started</h3>
                    <h3>Price</h3>
                    <h3>Resources</h3>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer
