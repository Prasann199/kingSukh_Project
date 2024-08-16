import React, { useState, useEffect } from 'react';
import "./BookingStats.css";
import out from "../../assets/out.jpg";
import ayodhya from "../../assets/ayodhya.webp";
import large from "../../assets/large.jpg";
import small from "../../assets/small.jpg";
import baranti from "../../assets/baranti.webp";
import palash from "../../assets/palash.webp";
import recape from "../../assets/recep.jpg";
import mithun from "../../assets/mithonDam.webp";
import flower from "../../assets/flower.jpg";
import room1 from "../../assets/1.jpg";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.config({ debug: true }); // Enable GSAP debugger

gsap.registerPlugin(ScrollTrigger);

const BookingStats = () => {
  const [bookings, setBookings] = useState(0);
  const [customer, setCustomer] = useState(0);

  useEffect(() => {
    const bookingTarget = { val: 0 };
    const customerTarget = { val: 0 };

    // Animation for bookings
    const bookingTween = gsap.to(bookingTarget, {
      val: 100,
      duration: 5,
      ease: 'power1.out',
      paused: true,
      onUpdate: () => {
        setBookings(Math.floor(bookingTarget.val));
      },
    });

    // Animation for customers
    const customerTween = gsap.to(customerTarget, {
      val: 150,
      duration: 5,
      ease: 'power1.out',
      paused: true,
      onUpdate: () => {
        setCustomer(Math.floor(customerTarget.val));
      },
    });

    // Setup ScrollTrigger
    const trigger = ScrollTrigger.create({
      trigger: '.page5-top',
      start: 'top 80%',
      end: 'top 60%',
      scrub: 1, // Adjust this value if needed
      onEnter: () => {
        bookingTween.play();
        customerTween.play();
      },
      onLeaveBack: () => {
        bookingTween.reverse();
        customerTween.reverse();
      },
      once: true,
    });

    // Cleanup ScrollTrigger and tweens on component unmount
    return () => {
      trigger.kill();
      bookingTween.kill();
      customerTween.kill();
    };
  }, []); // Empty dependency array to run only once

  return (
    <div className="page5" id="gallery">
      <div className="page5-top">
        <div className="page5-top-left">
          <h1>{bookings}+</h1>
          <p>Bookings Completed</p>
        </div>
        <div className="page5-top-right">
          <h1>{customer}+</h1>
          <p>Happy Customers</p>
        </div>
      </div>
      <div className="page5-bottom" id="gallery">
        <h1>Gallery</h1>
        <div className="page5-inner-bottom">
          <div className="blank"></div>
          <div className="gallery">
            <div className="page5-box page5-box1">
              <img src={out} alt="" />
            </div>
            <div className="page5-box"></div>
            <div className="page5-box"></div>
            <div className="page5-box page5-box2">
              <img src={ayodhya} alt="" />
            </div>
            <div className="page5-box page5-box3">
              <img src={large} alt="" />
            </div>
            <div className="page5-box"></div>
            <div className="page5-box"></div>
            <div className="page5-box page5-box4">
              <img src={palash} alt="" />
            </div>
            <div className="page5-box page5-box5">
              <img src={small} alt="" />
            </div>
            <div className="page5-box"></div>
            <div className="page5-box"></div>
            <div className="page5-box page5-box6">
              <img src={baranti} alt="" />
            </div>
            <div className="page5-box page5-box7">
              <img src={recape} alt="" />
            </div>
            <div className="page5-box"></div>
            <div className="page5-box"></div>
            <div className="page5-box page5-box8">
              <img src={flower} alt="" />
            </div>
            <div className="page5-box page5-box9">
              <img src={room1} alt="" />
            </div>
            <div className="page5-box"></div>
            <div className="page5-box"></div>
            <div className="page5-box page5-box10">
              <img src={mithun} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingStats;
