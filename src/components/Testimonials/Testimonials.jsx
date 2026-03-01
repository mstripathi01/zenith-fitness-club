import React, {useState, useRef} from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from 'framer-motion';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const transition = {type: 'spring', duration : 3}
  const [selected,setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".left-t > span, .left-t > span + span", {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".left-t",
        start: "top 80%",
      }
    });

    // Right arrows animation
    gsap.from(".arrows img", {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".arrows",
        start: "top 90%",
      }
    });
  }, { scope: containerRef });

  return (
    <div className="testimonials" id='testimonials' ref={containerRef}>
      <div className = "left-t">
        <span>Testimonials</span>
        <span className = "stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
        key={selected}
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -100}}
        transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
        <span style = {{color : 'var(--orange)'}}>
          {testimonialsData[selected].name}
        </span>{" "}
        - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
      <motion.div 
       initial = {{opacity : 0, x : -100}}
       transition={{...transition , duration : 2}}
       whileInView={{opacity: 1, x : 0}}
       ></motion.div>
      <motion.div 
       initial = {{opacity : 0, x : -100}}
       transition={{...transition , duration : 2}}
       whileInView={{opacity: 1, x : 0}}
       ></motion.div>
        <motion.img 
        key={selected}
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -100}}
        transition={transition}
        src = {testimonialsData[selected].image} alt = "" />
        <div className="arrows">
          <img onClick = {()=> {
            selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1); 
          }}
        src={leftArrow} alt="" />
        <img onClick = {()=> {
            selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1); 
          }}
        src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
