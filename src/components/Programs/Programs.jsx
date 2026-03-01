import React, { useRef } from "react";
import './Programs.css';
import {programsData} from '../../data/programsData'
import RightArrow from "../../assets/rightArrow.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animate the header
    gsap.from(".programs-header span", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Animate the categories cards stagger
    gsap.from(".programs-categories .category", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".programs-categories",
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
   <div className="Programs" id="programs" ref={containerRef}>
     {/* header */}
     <div className="programs-header">
       <span className = "stroke-text">Explore our</span>
       <span>Programs</span>
       <span className = "stroke-text">to shape you</span>
     </div>

     <div className="programs-categories">
       {programsData.map((program)=> (
         <div className="category">
           {program.image}
           <span>{program.heading}</span>
           <span>{program.details}</span>
           <div className = "join-now">
           <span>Join Now</span>
           <img src = {RightArrow} alt = "" />
         </div>
         </div>
       ))}
     </div>
   </div>
  );
};

export default Programs


