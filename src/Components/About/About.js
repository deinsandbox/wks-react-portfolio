import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.css";

function About() {
  const [information, setInformation] = useState({});
  useEffect(() => {
    axios
      .get("https://ws-node-portfolio.herokuapp.com/about")
      .then((res) => setInformation(res.data[0]));
  });

  return (
    <div className="about">
      <div className="about-photo">
        <img
          className="about-photo-profile"
          src={information.photo}
          alt="Profile"
        />
      </div>
      <div className="description">
        <h1>{information.name}</h1>
        <h2>{information.profession}</h2>
        <p>{information.about_me}</p>
        <ul className="skills">
          {information.skills &&
            information.skills.map((skill, index) => {
              return (
                <li className="skill" key={index}>
                  {skill}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default About;
