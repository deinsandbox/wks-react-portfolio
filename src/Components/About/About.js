import React, { useState, useEffect } from "react";
import axios from "axios";
import SvgIcon from "../../Common/SvgIcon";

import "../../utils/icons.css";
import "./About.css";

function About() {
  const [information, setInformation] = useState({});
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios
      .get("https://ws-node-portfolio.herokuapp.com/about")
      .then(({ data }) => {
        setInformation(data);

        const iconsReq = data.skills.map((skill) => {
          const options = {
            slug: skill,
          };

          return axios.post(
            "https://ws-node-portfolio.herokuapp.com/icon",
            options
          );
        });

        axios.all(iconsReq).then(
          axios.spread((...res) => {
            const icons = res.map(({ data }) => data);
            icons.length && setSkills(icons);
          })
        );
      })
      .catch((error) => console.log(error));
  }, []);

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
        <ul className="skills">
          {skills.length &&
            skills.map(({ slug, path, hex, color, name }, index) => {
              return (
                <li className="skills--item" key={index}>
                  {slug && (
                    <span className={`skill--icon tech--icon__${slug}`}>
                      <SvgIcon path={path} hex={hex} color={color} />
                    </span>
                  )}
                  <span className="skill-text"> {name} </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default About;
