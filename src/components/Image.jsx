import React from "react";
// import { NavLink } from "react-router-dom";
const Image = ({ data }) => {
  return (
    <a href={data.urls.small} target="_blank" rel="noreferrer">
      <img
        src={data.urls.regular}
        alt={data.alt_description}
        className="w-full h-72 object-cover rounded-lg shadow-lg"
      />
    </a>
  );
};

export default Image;