import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Portfolio.css";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("https://ws-node-portfolio.herokuapp.com/portfolio")
      .then((res) => setProjects(res.data));
  });

  return (
    <div className="portfolio">
      <div className="card-portfolio">
        {projects.length &&
          projects.map((project, index) => {
            return (
              <div key={index} className="card-project">
                <h1> {project.name} </h1>
                <img
                  className="project-image"
                  src={project.image}
                  alt="Project"
                />
                <p> {project.description} </p>
                <a className="visit-project" href={project.link}>
                  Visit Project
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Portfolio;
