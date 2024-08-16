import React from 'react'
import "./Footer.css";
import facebook2 from "../../assets/facebook.png";
import youtube from "../../assets/youtube-icon-svgrepo-com.svg";
import instagram2 from "../../assets/instagram.png";
import twitter2 from "../../assets/twitter.png"


const Footer = () => {
  return (
    <div className="footer" id="footer">
        <hr />
        <div className="footer-up">
          <div className="footer-box">
            <a href="#home" ><h4 className="logo1" >Kingsukh Guest House</h4></a>
            <p>
            Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
            <div className="page1-btn">
          <a href="https://wa.link/at5ion"><button>
            <div className="btn-overlay"></div>
            <span>Book Now</span>
          </button></a>
        </div>
          </div>
          <div className="footer-box">
            <h4>QUICK LINKS</h4>
          <a href="#">Browse Destinations</a><a href="#">Special Offers & Packages</a><a href="#">Room Types & Amenities</a><a href="#">Customer Reviews & Ratings</a><a href="#">Travel Tips & Guides</a>

          </div>
          <div className="footer-box">
          <h4>OUR SERVICES</h4>
          <a href="#">Concierge Assistance</a><a href="#">Flexible Booking Options</a><a href="#">Airport Transfers</a><a href="#">
          Wellness & Recreation</a>



          </div>
          <div className="footer-box">
            <h4>CONTACT US</h4>
            <a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a>
            <a href="mailto:%20kkghosh0099@gmail.com">kkghosh0099@gmail.com</a>
            <a href="tel:+919007062180">+91 9007062180</a>
            <div className="footer-imgs">
              <img src={instagram2} alt="" />
              <img src={facebook2} alt="" /><img src={twitter2} alt="" />
            <img src={youtube} alt="" />
            </div>


          </div>
        </div>
        <div className="footer-bottom">
        <p>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
        </div>
        
      </div>
  )
}

export default Footer