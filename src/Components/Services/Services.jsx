import React from 'react'
import "./Services.css";
import palash from "../../assets/palash.webp";
const Services = () => {
  return (
    <div className="page4" id="services">
        <img src={palash} alt="" />
        <div className="page4-box">
          <p>SERVICES</p>
          <h1>Strive Only For The Best.</h1>
          <p >
            <span>
              <i class="ri-shield-star-line"></i>
            </span>
            High Class Security
          </p>
          <p>
            <span>
              <i class="ri-24-hours-fill"></i>
            </span>
            24 Hours Room Service
          </p>
          <p>
            <span>
              <i class="ri-restaurant-2-fill"></i>
            </span>
            Restaurant
          </p>
          <p>
            <span>
              <i class="ri-map-2-line"></i>
            </span>
            Tourist Guide Support
          </p>
        </div>
      </div>
  )
}

export default Services