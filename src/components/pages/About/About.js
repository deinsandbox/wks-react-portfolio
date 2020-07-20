import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isEmptyObject } from '../../../utils/validation';

import SvgIcons from '../../common/SvgIcons';

import '../../../assets/styles/icons.css';
import './About.css';

const About = () => {
  const [information, setInformation] = useState({});
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const BACK_API = process.env.REACT_APP_BACK_API;
    axios
      .get(`${BACK_API}/about`)
      .then(({ data }) => {
        setInformation(data);

        const iconsReq = data.skills.map((skill) => {
          const options = {
            slug: skill,
          };

          return axios.post(`${BACK_API}/icon`, options);
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
    !isEmptyObject(information) && (
      <div className="about">
        <div className="about__avatar">
          <img
            className="about__picture"
            src={information.photo}
            alt="Profile"
          />
        </div>
        <div className="about__description">
          <h1>{information.name}</h1>
          <h2>{information.profession}</h2>
          <p>{information.about}</p>
          <p>{information.from}</p>
          <div className="skills">
            {!!skills.length &&
              skills.map(({ slug, path, hex, color, name }, index) => {
                return (
                  <div className="skills--item" key={index}>
                    {slug && (
                      <span className={`skill--icon tech--icon__${slug}`}>
                        <SvgIcons path={path} hex={hex} color={color} />
                      </span>
                    )}
                    <span className="skill-text"> {name} </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    )
  );
};

export default About;
