import React, { useState } from "react";
import HeroImg from "./Hero-Banner.jpeg";
import "./hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <img src={HeroImg} alt="Hero" className="hero-img" />
    </div>
  );
}

export default Hero;
