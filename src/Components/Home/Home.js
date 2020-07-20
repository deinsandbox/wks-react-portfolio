import React from "react";
import "./Home.css";

import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Blog from "../Blog/Blog";

const Home = ({ history }) => {
  return (
    <div>
      <About />
      <Portfolio />
      <Blog history={history} />
    </div>
  );
};

export default Home;
