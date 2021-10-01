// Portugal Navbar
import React, { useState } from "react";

import { Link as Link1 } from "react-router-dom";

// documents
// import { SignInButton } from "./SignInButton";
import "./Navbar2.css";
// import logo from "./images/logo1.jpeg";

// COMPONENT
function Navbar2() {
  // States to alter:
  // used in handleclick(Hamburger/X) & closeMobileMenu(LINKS)
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="filter">
          <div className="navbar-top">
            <a href="http://localhost:3000">
              <h4 className="navbar-top-text">Mexissippi</h4>
            </a>
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
              <li className="nav-item ">
                <Link1 className="nav-links contact-link" to="/utrecht">
                  Netherlands
                </Link1>
              </li>
              {/* Smooth Scroll Section */}
              <li className="nav-item">
                <Link1 className="nav-links contact-link" to="/portugal">
                  Portugal
                </Link1>
              </li>
              <li className="nav-item ">
                <Link1 className="nav-links contact-link" to="/norway">
                  Norway
                </Link1>
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

export default Navbar2;
