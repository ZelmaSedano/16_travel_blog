import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <div className="hero-wrapper" id="section1">
        <a href="http://localhost:3000/utrecht">
          <h1 className="hero-text">Utrecht, NL</h1>
          <h4 className="hero-subtext">Explore Holland in the Fall</h4>
        </a>
      </div>
    </div>
  );
}

export default Hero;
