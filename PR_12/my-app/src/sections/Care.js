// src/sections/Care.js
import React from "react";
import "../style/care.css";
import iconCare1 from "./src/images/iconCare1.svg";

function Care() {
  const services = [
    {
      id: 1,
      title: "Pet Grooming",
      desc: "There are many variatio of passage of Lorem for a Ipsum available",
      icon: iconCare1,
    },
    {
      id: 2,
      title: "Pet Grooming",
      desc: "There are many variatio of passage of Lorem for a Ipsum available",
      icon: iconCare1,
    },
    {
      id: 3,
      title: "Pet Grooming",
      desc: "There are many variatio of passage of Lorem for a Ipsum available",
      icon: iconCare1,
    },
    {
      id: 4,
      title: "Pet Grooming",
      desc: "There are many variatio of passage of Lorem for a Ipsum available",
      icon: "./src/images/iconCare1.svg",
    },
  ];

  return (
    <div className="care">
      <div className="care__content wrap">
        <div className="title__care">
          <p className="desc desc_md text_red">Care For Your Pet</p>
          <h2 className="title title_md text_black">What We Do</h2>
        </div>
        <div className="care__cards">
          {services.map((service) => (
            <div key={service.id} className="care__card">
              <img src={service.icon} alt="" />
              <h4 className="title title_lt text_black">{service.title}</h4>
              <p className="desc desc_md text_gray">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Care;
