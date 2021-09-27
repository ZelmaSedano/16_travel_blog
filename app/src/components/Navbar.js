// Desktop/2) React/YouTube/Brian
import React, { useState, useEffect } from "react";

import { Link as Link1 } from "react-router-dom";
import { Link as Link2 } from "react-scroll";

// documents
// import { SignInButton } from "./SignInButton";
import "./Navbar.css";
// import logo from "./images/logo1.jpeg";

// COMPONENT
function Navbar() {
  // States to alter:
  // used in handleclick(Hamburger/X) & closeMobileMenu(LINKS)
  const [click, setClick] = useState(false);
  // show button or not - used in useEffect
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Contact Button disappears in Mobile View ********************
  const showButton = () => {
    if (window.innerWidth <= 1140) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // button will only render once b/c of the empty parameters - if we don"t have this there the button will pop up in Mobile Menu when you refresh page
  useEffect(() => {
    showButton();
  }, []);

  // when you change the size of the window, the button shows up
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="filter">
          <div className="navbar-top">
            <h4 className="navbar-top-text">Mexissippi</h4>
          </div>
          {/****** holds entire navbar *************************/}
          <div className="navbar-container">
            {/* Header Text on Mobile */}
            <Link1 to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <h4 className="logo-text">Mexissippi</h4>
            </Link1>

            {/* Hamburger Menu */}
            <div
              role="menu"
              className="menu-icon"
              onClick={handleClick}
              onKeyDown={handleClick}
              tabIndex={0}
            >
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>

            {/* Nav Menu */}
            {/* .active class is added in mobile */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link1 to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link1>
              </li>

              {/* Smooth Scroll Section */}
              <li className="nav-item">
                <Link2
                  className="nav-links smooth-scroll"
                  to="section1"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Holland
                </Link2>
              </li>
              <li className="nav-item ">
                <Link2
                  className="nav-links smooth-scroll"
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Portugal
                </Link2>
              </li>
              <li className="nav-item ">
                <Link2
                  className="nav-links smooth-scroll"
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Scandinavia
                </Link2>
              </li>
              {/* Where you go to add blog posts */}
              <li className="nav-item ">
                <Link1
                  className="nav-links contact-link"
                  to="/admin"
                  onClick={closeMobileMenu}
                >
                  Admin
                </Link1>
              </li>
              {/* End Smooth Scroll Section */}

              {/* Mobile SignUp Btn - Only shows up on Mobile */}
              {/* <li className="mobile-link">
                <Link1
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link1>
              </li> */}
            </ul>

            {/* END Nav Menu */}

            {/* <div className="nav-btn">
              <button className="btn">Contact</button>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
