// src/sections/Professional.js
import React from "react";
import "../style/professional.css";

function Professional() {
  return (
    <div className="professional">
      <div className="professional__content wrap">
        <div className="professional__info">
          <h3 className="title title_md text_black">Professional Pet Care</h3>
          <p className="desc desc_lg text_gray">
            Pet owners trust us to look after the needs of their beloved
            companions. We are specialists committed to delivering the very
            highest of veterinary care and affection.
          </p>
          <a className="button button_red" href="">
            Contact Us Now
          </a>
        </div>
        <img src="./images/PrDog.png" alt="" />
      </div>
    </div>
  );
}

export default Professional;
