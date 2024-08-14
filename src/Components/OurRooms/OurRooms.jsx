import React from 'react'
import "./OurRooms.css";
import small from "../../assets/small.jpg"
import large from "../../assets/large.jpg"
const OurRooms = () => {
  return (
    <div className="page3">
        <p>OUR LIVING ROOM</p>
        <h1>The Most Memorable Rest Time Starts Here.</h1>
        <div className="page3-main">
          <div className="page3-main-left">
            <div className="page3-main-top page3-main-top1">
              <img src={small} alt="" />
              <div className="icons">
                <span>
                  <i class="ri-heart-fill"></i>
                </span>
                <span>
                  <i class="ri-paint-fill"></i>
                </span>
                <span>
                  <i class="ri-shield-star-line"></i>
                </span>
              </div>
            </div>
            <div className="page3-main-bottom page3-main-bottom1">
              <p>Cozy Haven Room</p>
              <p>
                Escape to comfort in our Cozy Haven Room, a snug retreat
                designed for intimate relaxation.
              </p>
              <p>
                Starting from <span>Rs. 1000/night</span>
              </p>
              <button>book now</button>
            </div>
          </div>
          <div className="page3-main-right">
            <div className="page3-main-top page3-main-top2">
              <img src={large} alt="" />
              <div className="icons">
                <span>
                  <i class="ri-heart-fill"></i>
                </span>
                <span>
                  <i class="ri-paint-fill"></i>
                </span>
                <span>
                  <i class="ri-shield-star-line"></i>
                </span>
              </div>
            </div>
            <div className="page3-main-bottom page3-main-bottom2">
              <p>Spacious Serenity Suite</p>
              <p>
                Indulge in luxury and ample space in our Spacious Serenity
                Suite, where tranquility meets roomy elegance.
              </p>
              <p>
                Starting from <span>Rs. 1000/night</span>
              </p>
              <button>book now</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default OurRooms