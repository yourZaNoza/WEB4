// src/sections/Service.js
import React from "react";
import "../style/service.css";

function Service() {
  return (
    <div className="service">
      <div className="service__content wrap">
        <div className="service__card service__card_left">
          <h3 className="title title_lt text_black">Regular Pack</h3>
          <h2 className="title title_md text_black">3 Days</h2>
          <ul className="service__list-items">
            <li className="service__item">Pet Shower</li>
            <li className="service__item">Fitness Checkup</li>
            <li className="service__item">Pet Grooming</li>
            <li className="service__item">Hair and Nail Cut</li>
            <li className="service__item">Control Hair Falling</li>
          </ul>
          <h3 className="title title_lt text_red service__price">
            $150Per Visit
          </h3>
          <a className="button button_red" href="">
            Purchase Pack
          </a>
        </div>
        <div className="service__card service__card_main text_while">
          <h3 className="title title_lt">Exclusive Pack</h3>
          <h2 className="title title_md">10 Days</h2>
          <ul className="service__list-items">
            <li className="service__item">Pet Shower</li>
            <li className="service__item">Fitness Checkup</li>
            <li className="service__item">Pet Grooming</li>
            <li className="service__item">Hair and Nail Cut</li>
            <li className="service__item">Control Hair Falling</li>
            <li className="service__item">Brush & Blow Dry</li>
            <li className="service__item">Pet Park And Games</li>
          </ul>
          <h3 className="title title_lt text_while service__price">
            $350Per Visit
          </h3>
          <a className="button button_while" href="">
            Purchase Pack
          </a>
        </div>
        <div className="service__card service__card_right">
          <h3 className="title title_lt text_black">Premium Pack</h3>
          <h2 className="title title_md text_black">30 Days</h2>
          <ul className="service__list-items">
            <li className="service__item">Pet Shower</li>
            <li className="service__item">Fitness Checkup</li>
            <li className="service__item">Pet Grooming</li>
            <li className="service__item">Hair and Nail Cut</li>
            <li className="service__item">Control Hair Falling</li>
          </ul>
          <h3 className="title title_lt text_red service__price">
            $550Per Visit
          </h3>
          <a className="button button_red" href="">
            Purchase Pack
          </a>
        </div>
      </div>
    </div>
  );
}

export default Service;
