import React from 'react'
import "./About.css";
import out from "../../assets/out.jpg"

const About = () => {
  return (
    <div className="page2" id="about" >
        <div className="page2-main">
          <div className="page2-left">
            <img src={out} loading='lazy' alt="loading" />
          </div>
          <div className="page2-dscrpt">
            <div className="page2-data">
              <p className="page2-heading">ABOUT US</p>
              <h1>The Best Holidays Start Here!</h1>
              <p>
                Embark on a tranquil journey at our Kingsukh Guest House,
                enveloped by the scenic allure of Biharinath Hill, Baranti Hill,
                Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon
                Dam, and the captivating Panchat Dam. Revel in the embrace of
                comfort, relish delightful meals, and unwind in our verdant
                garden oasis. Your ideal retreat beckons, promising a harmonious
                blend of nature's beauty and heartfelt hospitality. Explore the
                hidden gems of Purulia, creating memories that linger long after
                your stay.
              </p>
              <a className="link" href="">
                Address: Beside Barshal Water Tank, Manpur, Barhanti, West
                Bengal 723156
              </a>
              <a href="">Contact us: +91 9007062180</a>
              <a href="https://wa.link/at5ion"><button>
                <div className="btn-overlay"></div>
                <span>Book Now</span>
              </button></a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About;