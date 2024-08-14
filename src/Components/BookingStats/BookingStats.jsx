import React from 'react'
import "./BookingStats.css"
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
import { useState } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const BookingStats = () => {
    const [bookings, setBookings] = useState(0);
  const [customer, setCustomer] = useState(0);
  var count = 0;
 
  useGSAP(()=>{
    ScrollTrigger.create({
        trigger: ".page5-top",
        start: "top 80%",
        end: "top 60%",
        // markers:true,
        scrub: 2,
        onEnter: () => {
          gsap.to(
            { val: 0 },
            {
              val: 100,
              duration: 5,
              ease: "power1.out",
              onUpdate: function () {
                setBookings(Math.floor(this.targets()[0].val));
              },
            }
          );
    
          gsap.to(
            { val: 0 },
            {
              val: 150,
              duration: 5,
              ease: "power1.out",
              onUpdate: function () {
                setCustomer(Math.floor(this.targets()[0].val));
              },
            }
          );
        },
        once: true,
      });
  })

  
  return (
    <div className="page5">
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
        <div className="page5-bottom">
          <h1>Gallery</h1>
          <div className="page5-inner-bottom">
            <div className='blank'></div>
            <div className='gallery'>
            <div className=" page5-box page5-box1">
              <img src={out} alt="" />
            </div>
            <div className="page5-box "></div>
            <div className="page5-box "></div>
            <div className="page5-box page5-box2">
              <img src={ayodhya} alt="" />
            </div>
            
            <div className="page5-box page5-box3">
              <img src={large} alt="" />
            </div>
            <div className="page5-box "></div>
            <div className="page5-box "></div>
            <div className="page5-box page5-box4">
              <img src={palash} alt="" />
            </div>
            
            <div className="page5-box page5-box5">
              <img src={small} alt="" />
            </div>
            <div className="page5-box "></div>
            <div className="page5-box "></div>
            <div className="page5-box page5-box6">
              <img src={baranti} alt="" />
            </div>
            
            <div className="page5-box page5-box7">
              <img src={recape} alt="" />
            </div>
            <div className="page5-box "></div>
            <div className="page5-box "></div>
            <div className="page5-box page5-box8">
              <img src={flower} alt="" />
            </div>
            
            <div className="page5-box page5-box9">
              <img src={room1} alt="" />
            </div>
            <div className="page5-box "></div>
            <div className="page5-box "></div>
            <div className="page5-box page5-box10">
              <img src={mithun} alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BookingStats