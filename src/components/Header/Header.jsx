import React, { useState, useRef } from "react";
import "./Header.css";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = ({theme, setTheme}) => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useGSAP(() => {
    // Beautiful entrance animation for the logo
    gsap.fromTo(".logo", 
      { opacity: 0, scale: 0.5, rotation: -45 }, 
      { opacity: 1, scale: 1, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.5)", delay: 0.2 }
    );
  }, { scope: headerRef });

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="header" ref={headerRef}>
      <h1 className="logo" style={{fontSize: '2rem', margin: 0, fontWeight: '800', fontStyle: 'italic', letterSpacing: '2px', color: 'var(--text-color)'}}>
        ZENITH Fitness Club<span style={{color: 'var(--accent-color)'}}>.</span>
      </h1>
      
      <button 
        onClick={toggleTheme} 
        className="theme-toggle"
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-color)',
          fontSize: '1.5rem',
          cursor: 'pointer',
          marginLeft: 'auto',
          marginRight: '2rem',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>

      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: ".1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
