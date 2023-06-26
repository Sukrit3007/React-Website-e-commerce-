import React from 'react'
import './AboutUs.css'
import plant from './plant.svg'
import box from './box.svg'
import { PhoneOutgoing } from 'phosphor-react'

function AboutUs() {
  return (
    <div className='aboutUs'>
      <div className="aboutUs-top">
          <h1>About us</h1>
          <p>Order now and appreciate the beauty of nature</p>
      </div>
      <div className="aboutUs-bottom">
        {/* BOX 1 */}
        <div className="aboutUs-box1">
          <div className="aboutUs-box1-top">
            <div className="aboutUs-box1-top-img">
                <img src={plant} alt="plant" className='plant-icon' />
                <h1>Large Assortment</h1>
            </div> 
          </div>
          <div className="aboutUs-box1-bottom">
            <p>we offer many different types of products with fewer variations in each category.</p>
          </div>
        </div>

        {/* BOX 2 */}
        <div className="aboutUs-box2">
        <div className="aboutUs-box2-top">
            <div className="aboutUs-box2-top-img">
                <img src={box} alt="plant" />
                <h1>Fast & Free Shipping</h1>
            </div> 
          </div>
          <div className="aboutUs-box2-bottom">
            <p>4-day or less delivery time, free shipping and an expedited delivery option.</p>
          </div>
        </div>

        {/* BOX 3 */}
        <div className="aboutUs-box3">
          <div className="aboutUs-box3-top">
              <div className="aboutUs-box3-top-img">
                  <div className="call-image">
                    <PhoneOutgoing size={42} className='phone-icon'/>
                  </div>
                  <h1>Fast & Free Shipping</h1>
              </div> 
            </div>
            <div className="aboutUs-box3-bottom">
              <p>answers to any business related inquiry 24/7 and in real-time.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AboutUs
