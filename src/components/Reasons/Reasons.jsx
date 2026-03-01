import React, { useRef } from 'react';
import './Reasons.css';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Reasons = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Left images staggering in from top/left
    gsap.from(".left-r img", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".left-r",
        start: "top 80%",
      }
    });

    // Right text staggering in from right
    gsap.from(".right-r > span, .right-r > div", {
      x: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".right-r",
        start: "top 80%",
      }
    });

    // Animate partners
    gsap.from(".partners img", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".partners",
        start: "top 90%",
      }
    });
  }, { scope: containerRef });

  return (
    <div className = "Reasons" id = "reasons" ref={containerRef}>
      <div className = "left-r">
        <img src = {image1} alt = "" />
        <img src = {image2} alt = "" />
        <img src = {image3} alt = "" />
        <img src = {image4} alt = "" />
      </div>
      <div className = "right-r">
       <span>The Zenith Difference</span>
       <div>
         <span className = "stroke-text">why</span>
         <span> elevate with us?</span>
       </div>
       <div className = "details-r">
       <div>
       <img src={tick} alt=""></img>
       <span>OVER 140+ ELITE CONDITIONING COACHES</span>
       </div>
       <div>
       <img src={tick} alt="" />
       <span>BESPOKE PROTOCOLS FOR RAPID OPTIMIZATION</span>
       </div>
       <div>
       <img src={tick} alt="" />
       <span>COMPLIMENTARY WELLNESS ASSESSMENT FOR NEW MEMBERS</span>
       </div>
       <div>
       <img src={tick} alt="" />
       <span>EXCLUSIVE PREMIUM AMENITIES</span>
       </div>
      </div>
      <span style = {{
        color: "var(--gray)",
        fontWeight: "normal",
      }}>
      OUR PARTNERS
      </span>

      <div className="partners">
        <img src={nb} alt="" />
        <img src={adidas} alt="" />
        <img src={nike} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Reasons;
