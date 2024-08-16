import React, { useState } from 'react';
import "./Contact.css";
import linkedin from "../../assets/linkedin-svgrepo-com.svg";
import twitter from "../../assets/twitter-3-svgrepo-com.svg";
import instagram from "../../assets/instagram-167-svgrepo-com.svg";
import facebook from "../../assets/facebook-176-svgrepo-com.svg";

const Contact = () => {
  const [focused, setFocused] = useState(false);

  const raiseText = (e) => {
    const target = e.target;
    const parent = target.closest('.input-container');
    const span = parent.querySelector('span');

    // Move the span to the top by adding a class
    span.classList.add('raised');

    // Add a class to apply the border to the input container
    parent.classList.add('input-focused');

    setFocused(true);
  };

  const lowerText = (e) => {
    const target = e.target;
    const parent = target.closest('.input-container');
    const span = parent.querySelector('span');
    const input = parent.querySelector('input, textarea');

    // If the input or textarea is empty, lower the span
    if (!input.value) {
      span.classList.remove('raised');
      parent.classList.remove('input-focused');
    }
    
    setFocused(false);
  };

  return (
    <div className="page6" id="contact">
      <div className="contact">
        <div className="contact-left">
          <div className="contact-left-top">
            <h1>Contact Info</h1>
            <div>
              <span>
                <i className="ri-map-pin-fill"></i>
              </span>
              <p>
                Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </p>
            </div>
            <div>
              <span>
                <i className="ri-mail-open-fill"></i>
              </span>
              <p>kkghosh0099@gmail.com</p>
            </div>
            <div>
              <span>
                <i className="ri-phone-fill"></i>
              </span>
              <p>+91 9007062180</p>
            </div>
          </div>
          <div className="contact-left-bottom">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className="contact-right">
          <form action="">
            <div className="name">
              <div
                className="fname input-container"
                onClick={(e) => raiseText(e)}
                onBlur={(e) => lowerText(e)}
              >
                <input type="text" />
                <span>First Name</span>
              </div>
              <div
                className="lname input-container"
                onClick={(e) => raiseText(e)}
                onBlur={(e) => lowerText(e)}
              >
                <input type="text" />
                <span>Last Name</span>
              </div>
            </div>
            <div className="email-number">
              <div
                className="email input-container"
                onClick={(e) => raiseText(e)}
                onBlur={(e) => lowerText(e)}
              >
                <input type="email" />
                <span>Email Address</span>
              </div>
              <div
                className="mobile-no input-container"
                onClick={(e) => raiseText(e)}
                onBlur={(e) => lowerText(e)}
              >
                <input type="text" />
                <span>Mobile Number</span>
              </div>
            </div>
            <div
              className="message input-container"
              onClick={(e) => raiseText(e)}
              onBlur={(e) => lowerText(e)}
            >
              <textarea name="message" id=""></textarea>
              <span>Enter your message here</span>
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
