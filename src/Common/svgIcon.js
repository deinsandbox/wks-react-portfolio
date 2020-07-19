import React from "react";
import axios from "axios";

const [icon, setIcon] = useState({});
const COLOR_WHITE = "ffffff";

const getIcon = (name) => {
  const options = {
    body: {
      name: name,
    },
  };

  axios
    .post("https://ws-node-portfolio.herokuapp.com/icon", options)
    .then(({ data }) => setIcon);
};

const svgIcon = ({ name, fill = COLOR_WHITE }) => {
  getIcon(name);

  return (
    Object.keys(icon).length && (
      <svg xmlns="http://www.w3.org/2000/svg" fill={`#${icon.hex}`}>
        <g fill={`#${fill}`}>
          <path d={icon.path} />
        </g>
      </svg>
    )
  );
};

export default svgIcon;
