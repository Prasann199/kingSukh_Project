import React, { useState } from "react";
import "./Navbar.css";
import menu from "../../assets/menu.svg";
// import { Link } from "react-scroll/modules";

const Navbar = () => {

  const handleScroll = (event, id) => {
    event.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <p alt="Close Menu" className="close-icon" onClick={toggleMenu}>
          x
        </p>
        <div className="nav-options-small">
        <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
        <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
        <a href="#rooms" onClick={(e) => handleScroll(e, 'rooms')}>Rooms</a>
        <a href="#gallery" onClick={(e) => handleScroll(e, 'gallery')}>Gallery</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
          
          {/* <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#rooms">Rooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a> */}
        </div>
      </div>
      <nav>
        <div className="logo">
          <p>Kingsukh Guest House</p>
        </div>
        <div className="nav-options-large">
        <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
        <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
        <a href="#rooms" onClick={(e) => handleScroll(e, 'rooms')}>Rooms</a>
        <a href="#gallery" onClick={(e) => handleScroll(e, 'gallery')}>Gallery</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
          
          {/* <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#rooms">Rooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a> */}
        </div>
        <div className="page1-btn">
          <img src={menu} alt="Menu" onClick={toggleMenu} />
         <a href="https://wa.link/at5ion"> <button >
            <div className="btn-overlay"></div>
            <span>Book Now</span>
          </button></a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
