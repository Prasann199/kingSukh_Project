
import './App.css'
import React, { Suspense } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import BookingStats from './Components/BookingStats/BookingStats';
import Contact from './Components/Contact/Contact';
import Map from './Components/Map/Map';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

// Lazy loading OurRooms component
const OurRooms = React.lazy(() => import('./Components/OurRooms/OurRooms'));


function App() {
  
  const AnimateSections=()=>{
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
      scale: 0.8,
      scrollTrigger: {
        scrooller: "body",
        trigger: ".page1-headings h1",
        // markers:true,
        start: "top 35%",
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
        start: "top 30%",
        end: "top 0%",
        scrub: 5,
      },
    });
    
    // Create a timeline without an initial scroll trigger
const t1 = gsap.timeline();

// First element animation (triggered by scroll)
t1.from(".page2-dscrpt .page2-data p:first-child", {
  x: 500,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page2", // The element that triggers the animation
    start: "top 85%", // Start when the top of page2 hits 85% of the viewport height
    end: "top 80%", // End when the top of page2 hits 73% of the viewport height
    scrub: 2, // Smooth scrolling
    once: true, // Run the animation only once
    // markers: true, // Uncomment this line to enable debug markers
    onEnter: () => {
      // Once the scroll trigger is activated, play the rest of the timeline
      t1.play();
    },
  },
});

// Pause the timeline initially so that it only starts after the first scroll trigger
t1.pause();

// Sequential animations (triggered after the first one based on timeline)
t1.from(".page2-dscrpt .page2-data :nth-child(2)", {
  x: -500,
  opacity: 0,
  duration: 0.5,
});

t1.from(".page2-dscrpt .page2-data :nth-child(3)", {
  y: 50,
  opacity: 0,
  duration: 0.5,
});

t1.from(".page2-dscrpt .page2-data :nth-child(4), .page2-dscrpt .page2-data :nth-child(5)", {
  y: 50,
  opacity: 0,
  duration: 0.5,
});

t1.from(".page2-dscrpt .page2-data :nth-child(6)", {
  y: 50,
  opacity: 0,
  duration: 0.5,
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

    const pge4_tl = gsap.timeline();

    pge4_tl.from(".page4-box", {
      // x:"-50vw",
      height: "0%",
      // opacity:0,
      top: "40%",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        // markers:true,
        start: "top 20%",
        end: "top 15%",
        scrub: 3,
        once:true,
        onEnter: () => {
          // Once the scroll trigger is activated, play the rest of the timeline
          pge4_tl.play();
        },
      },
    });
    // Pause the timeline initially so that it only starts after the first scroll trigger
    pge4_tl.pause();
    pge4_tl.from(".page4-box p:nth-child(1)", {
      x: 500,
      opacity:0,
      duration: 0.4,
    });
    pge4_tl.from(".page4-box h1", {
      y: 50,
      opacity: 0,
      duration: 0.4,
    });
    
    pge4_tl.from(".page4-box p:nth-child(3)", {
      x: 500,
      opacity:0,
      duration: 0.4,
    });
    pge4_tl.from(".page4-box p:nth-child(4)", {
      x: 500,
      opacity:0,
      duration: 0.4,
    });
    pge4_tl.from(".page4-box p:nth-child(5)", {
      x: 500,
      opacity:0,
      duration: 0.4,
    });
    pge4_tl.from(".page4-box p:nth-child(6)", {
      x: 500,
      opacity:0,
      duration: 0.4,
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

    
  }

  useGSAP(
    AnimateSections
  );

 

  return (
    <div className="Kingsukh_App scroll-container">
      <div className="pre-loader">
            <h1>KingSukh <span>Guest House</span></h1>
        </div>
      <Navbar  />
      <Home  />
      <About />
       <Suspense fallback={<div>Loading...</div>}>
        <OurRooms />
      </Suspense>
      <Services />
      <BookingStats />
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}

export default App
