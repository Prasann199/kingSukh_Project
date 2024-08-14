import React from 'react'
import "./Navbar.css";
import menu from "../../assets/menu.svg";
const Navbar = () => {
  return (
    <nav>
        <div className="logo">
          <p>Kingsukh Guest House</p>
        </div>
        <div className="nav-options">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Rooms</a>
          <a href="">Gallery</a>
          <a href="">Contact</a>
        </div>
        <div className="page1-btn">
          <img src={menu} alt="" />
          <button>
            <div className="btn-overlay"></div>
            <span>Book Now</span>
          </button>
        </div>
      </nav>
  )
}

export default Navbar