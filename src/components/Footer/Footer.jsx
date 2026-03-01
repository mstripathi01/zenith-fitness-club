import React, { useRef } from "react";
import "./Footer.css";
import { YouTube } from "../../assets/youtube.png";
import { Instagram } from "../../assets/instagram.png";
import { LinkedIn } from "../../assets/linkedin.png";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Animate social links
      gsap.from(".social-links img", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 95%",
        },
      });

      // Animate logo
      gsap.from(".logo-f img", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 95%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="Footer-container" ref={containerRef}>
      <hr />
      <div className="footer">
        <div className="social-links">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={YouTube} alt="YouTube" height="40" />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" height="40" />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" height="40" />
          </a>
        </div>
        <div className="logo-f">
          <h1
            style={{
              fontSize: "3rem",
              margin: 0,
              fontWeight: "800",
              fontStyle: "italic",
              letterSpacing: "2px",
              color: "var(--text-color)",
            }}
          >
            ZENITH Fitness Club
            <span style={{ color: "var(--accent-color)" }}>.</span>
          </h1>
        </div>
        <ScrollToTop
          smooth
          component={
            <>
              <FaArrowUp />
            </>
          }
        />
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
