import React from 'react'
import ayodhya from "../../assets/ayodhya.webp";
import "./Home.css";

const Home = () => {
  return (
    <div className="page1">
        <div className="page1-headings">
          <p>Simple - Unique - Friendly</p>
          <h1>
            Make Yourself At Home In Our <span>Guest House</span>.
          </h1>
        </div>

        {/* <marquee behavior="" direction="">KingSukh Guest House KingSukh Guest House</marquee> */}
        <div className="page1-img">
          <img src={ayodhya} alt="" />
        </div>
      </div>
  )
}

export default Home