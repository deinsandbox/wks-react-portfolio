import React from "react";

const COLOR_WHITE = "ffffff";

const SvgIcons = ({ hex, path, color = COLOR_WHITE }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="100%" height="100%" fill={`#${hex}`} />
      <g fill={`#${color}`}>
        <path d={path} />
      </g>
    </svg>
  );
};

export default SvgIcons;
