import React, { useState, useEffect } from "react";
import axios from "axios";
import { getIconURL } from "../../Common/icons";
import "./About.css";

function About() {
  const [information, setInformation] = useState({});
  useEffect(() => {
    axios
      .get("https://ws-node-portfolio.herokuapp.com/about")
      .then((res) => setInformation(res.data));
  });

  return (
    <div className="about">
      <div className="about__avatar">
        <img className="about__picture" src={information.photo} alt="Profile" />
      </div>
      <div className="about__description">
        <h1>{information.name}</h1>
        <h2>{information.profession}</h2>
        <p>{information.about}</p>
        <p>{information.from}</p>
        <ul>
          {information.skills &&
            information.skills.map((skill, index) => {
              const { url } = getIcon(skill);

              return (
                <li className="skill" key={index}>
                  <span>
                    <img className="skill__icon" src={url} />
                  </span>
                  <span>{skill}</span>
                </li>
              );
            })}
        </ul>
        <ul>
          {information.learn &&
            information.learn.map((learn, index) => {
              const { url } = getIcon(learn);

              return (
                <li className="learn" key={index}>
                  <span>
                    <img className="learn__icon" src={url} />
                  </span>
                  <span>{learn}</span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default About;
