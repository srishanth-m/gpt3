import React from "react";
import "./card.css";

const Feature = ({ title, text }) => (
  <div className="container">
    <div className="headings">
      <div></div>
      <h6>{title}</h6>
    </div>
    <div className="text">{text}</div>
  </div>
);

export default Feature;
