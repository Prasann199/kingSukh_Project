
import './App.css'
import About from './Components/About/About'
import BookingStats from './Components/BookingStats/BookingStats'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Map from './Components/Map/Map'
import Navbar from './Components/Navbar/Navbar'
import OurRooms from './Components/OurRooms/OurRooms'
import Services from './Components/Services/Services'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

function App() {
  
  useGSAP(() => {
    gsap.to(".pre-loader", {
      y: -1000,
      duration: 2,
      delay: 1,
    });
    gsap.to(".page1-img>img", {
      duration: 2,
      scale: 1.15,
      delay:1,
      opacity: 1,
      ease: "power2.inOut",
    });
    const t2 = gsap.timeline();
    t2.from(".page1-headings>p", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      delay:1,
    });
    t2.from(".page1-headings>h1", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      
    });
    gsap.to(".page1-img img", {
      scale: 0.7,
      scrollTrigger: {
        scrooller: "body",
        trigger: ".page1-headings h1",
        // markers:true,
        start: "top 50%",
        end: "top 25%",
        scrub: 2,
      },
    });
    // gsap.to("")
    gsap.to(".page2", {
      y: "-100vh",
      duration: 3,
      scrollTrigger: {
        trigger: ".page1-headings h1",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "top 0%",
        scrub: 5,
      },
    });
    const t1 = gsap.timeline({
      scrollTrigger: {
        scroller: "body", // The element to be scrolled (usually body)
        trigger: ".page2 ", // The element that triggers the animation
        start: "top 85%", // Start when the top of page2 hits the top of the viewport
        end: "top 73%", // End when the bottom of page2 hits the top of the viewport
        // markers: true,            // Display markers for debugging
        scrub: 2, // Smooth scrolling
        once: true,
      },
      stagger: 0.5,
    });

    t1.from(".page2-dscrpt .page2-data p:first-child", {
      x: 500, // Moves the element 50px on the Y-axis                  // Start from an opacity of 0 (optional)
      duration: 1.5,
      opacity: 0,
    });
    t1.from(".page2-dscrpt .page2-data :nth-child(2)", {
      x: -500,
      opacity: 0, // Moves the element 50px on the Y-axis                  // Start from an opacity of 0 (optional)
      duration: 2,
    });
    t1.from(".page2-dscrpt .page2-data :nth-child(3)", {
      y: 50,
      opacity: 0, // Moves the element 50px on the Y-axis                  // Start from an opacity of 0 (optional)
      duration: 1.5,
    });
    t1.from(
      ".page2-dscrpt .page2-data :nth-child(4),.page2-dscrpt .page2-data :nth-child(5)",
      {
        y: 50,
        opacity: 0, // Moves the element 50px on the Y-axis                  // Start from an opacity of 0 (optional)
        duration: 1.5,
      }
    );
    t1.from(".page2-dscrpt .page2-data :nth-child(6)", {
      y: 50,
      opacity: 0, // Moves the element 50px on the Y-axis                  // Start from an opacity of 0 (optional)
      duration: 1.5,
    });
    gsap.from(".page3 p", {
      y: 100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page3",
        // markers:true,
        start: "top 60%",
        end: "top 50%",
        scrub: 2,
        once: true,
      },
    });
    gsap.from(".page3 h1", {
      y: -100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page3",
        // markers:true,
        start: "top 60%",
        end: "top 50%",
        scrub: 2,
        once: true,
      },
    });

    gsap.from(".page3-main-left", {
      x: -550,
      // opacity:0,
      duration: 2,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page3",
        // markers:true,
        start: "top 50%",
        end: "top 30%",
        scrub: 2,
        once: true,
      },
    });

    gsap.from(".page3-main-right", {
      x: 550,
      // opacity:0,
      duration: 2,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page3",
        // markers:true,
        start: "top 50%",
        end: "top 30%",
        scrub: 2,
        once: true,
      },
    });

    const pge4_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        // markers:true,
        start: "top 20%",
        end: "top 10%",
        scrub: 3,
      },
    });

    pge4_tl.from(".page4-box", {
      // x:"-50vw",
      height: "0%",
      // opacity:0,
      top: "40%",
      duration: 2,
    });
    pge4_tl.from(".page4-box p:nth-child(1)", {
      x: 500,
      duration: 2,
    });
    pge4_tl.from(".page4-box h1", {
      y: 50,
      opacity: 0,
      duration: 2,
    });
    pge4_tl.from(".page4-box p:nth-child(2)", {
      x: 500,
      duration: 2,
    });
    pge4_tl.from(".page4-box p:nth-child(3)", {
      x: 500,
      duration: 2,
    });
    pge4_tl.from(".page4-box p:nth-child(4)", {
      x: 500,
      duration: 2,
    });
    pge4_tl.from(".page4-box p:nth-child(5)", {
      x: 500,
      duration: 2,
    });
    pge4_tl.from(".page4-box p:nth-child(6)", {
      x: 500,
      duration: 2,
    });
    gsap.from(".page5-bottom", {
      display: "none",
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page5-top",
        // markers: true,
        start: "bottom 1%",
        end: "bottom 0%",
        scrub: 3,
        pin: true,
      },
    });

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
  });

  const raiseText=(e)=>{
    const target = e.target;
    const parent = target.closest('.input-container'); // Use a common parent container
    const span = parent.querySelector('span');
    const input = parent.querySelector('input, textarea'); // This handles both input and textarea

    // Move the span to the top by adding a class
    span.classList.add('raised');

    // Add a class to apply the border to the input container
    parent.classList.add('input-focused');

    // Focus the associated input field
    input.focus();
  }

  return (
    <div className="Kingsukh_App">
      <div className="pre-loader">
            <h1>KingSukh <span>Guest House</span></h1>
        </div>
      <Navbar />
      <Home />
      <About />
      <OurRooms />
      <Services />
      <BookingStats />
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}

export default App
