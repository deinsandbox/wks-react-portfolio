import React, { useState, useEffect } from "react";
import axios from "axios";

import { svgIcon } from "../../Common/svgIcon";

import { getIcon } from "../../Common/icons";
import "../../Common/icons.css";

import "./About.css";

function About() {
  const [information, setInformation] = useState({});
  useEffect(() => {
    axios
      .get("https://ws-node-portfolio.herokuapp.com/about")
      .then(({ data }) => setInformation)
      .catch((error) => console.log);
  });

  return (
    <div className="about">
      <div className="about__avatar">
        {/* <img className="about__picture" src={information.photo} alt="Profile" /> */}
      </div>
      <div className="about__description">
        <h1>{information.name}</h1>
        <h2>{information.profession}</h2>
        <p>{information.about}</p>
        <p>{information.from}</p>
        <ul className="skills">
          {information.skills &&
            information.skills.map((skill, index) => {
              const icon = getIcon(skill);
              return (
                <li className="skills--item" key={index}>
                  {icon && (
                    <span className={`skill--icon tech--icon__${icon.name}`}>
                      <svgIcon name={icon.name} fill={icon.fill} />
                    </span>
                  )}
                  <span className="skill-text"> {skill} </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default About;
