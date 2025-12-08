// src/sections/Team.js
import React from "react";
import "../style/team.css";

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Rosalina Wiliam",
      role: "CEO & Founder",
      img: "./src/images/team1.png",
    },
    {
      id: 2,
      name: "Rosalina Wiliam",
      role: "CEO & Founder",
      img: "./src/images/team1.png",
    },
    {
      id: 3,
      name: "Rosalina Wiliam",
      role: "CEO & Founder",
      img: "./src/images/team1.png",
    },
    {
      id: 4,
      name: "Rosalina Wiliam",
      role: "CEO & Founder",
      img: "./src/images/team1.png",
    },
  ];

  return (
    <div className="team">
      <div className="team__content wrap">
        <div className="title__team">
          <p className="desc desc_sm text_red">Our Team</p>
          <h2 className="title title_md text_black">Meet Our Groomers</h2>
        </div>
        <div className="team__cards">
          {teamMembers.map((member) => (
            <div key={member.id} className="team__card">
              <img src={member.img} alt={member.name} />
              <h3 className="title title_lt text_black">{member.name}</h3>
              <p className="desc desc_sm text_red">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
