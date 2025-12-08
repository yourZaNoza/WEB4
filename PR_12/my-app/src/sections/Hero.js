// src/sections/Hero.js
import React from "react";
import "../style/hero.css";
import dogHero from "./src/images/dogHero.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__content wrap">
        <div className="hero__info">
          <h1 className="title title_lg text_black title__hero">
            For Your Pet’s Natural Life & Care
          </h1>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt
          </p>
          <div className="buttons">
            <a href="" className="button button_red">
              Our Services
            </a>
            <a href="" className="button button_green">
              Make Appointment
            </a>
          </div>
        </div>
        <div className="hero__img">dogHero</div>
      </div>
    </div>
  );
}

export default Hero;
