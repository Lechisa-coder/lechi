import React from "react";

const Footer = ({ titles }) => {
  return (
    <div>
      <h2 style={{ color: "red" }}> I am from Footer component</h2>
      <h1 style={styling}>{titles}</h1>
    </div>
  );
};
Footer.defaultProps = { titles: "default title" };
const styling = { color: "yellow", backgroundColor: "black" };
export default Footer;
