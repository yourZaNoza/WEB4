// src/sections/Success.js
import React from "react";
import "../style/success.css";

function Success() {
  return (
    <div className="success">
      <div className="success__content wrap">
        <div className="success__info">
          <div className="success__title">
            <p className="desc desc_sm text_red">Our Success Story</p>
            <h2 className="title title_md text_black">
              Experience Vet Clinic
              <br /> And Services
            </h2>
          </div>
          <p className="desc desc_md text_black">
            Aliquam erat volutpat In id fermentum augue, ut pellentesque
            Maecenas at arcu risus. Donec commodo sodales ex, scelerisque
            laoreet nibh hakso hendrerit id. In aliquet magna nec lobortis
            maximus.
          </p>
          <ul className="success__list-item">
            <li className="success__item">
              Donec commodo scelerisque laoreet nibh hendrerit
            </li>
            <li className="success__item">
              In aliquet magna nec lobortis maximus. Etiam a dolor placerat
            </li>
            <li className="success__item">
              Etiam dolor nec elementum ipsum convall Maecenas
            </li>
          </ul>
          <a href="" className="button button_red">
            Know More About Us
          </a>
        </div>
        <img src="../images/StoryDog.png" alt="" />
      </div>
    </div>
  );
}

export default Success;
