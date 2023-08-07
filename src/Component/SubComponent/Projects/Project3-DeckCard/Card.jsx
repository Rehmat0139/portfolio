import React from "react";
import "./Card.css";

const Card = ({ imgSrc, imgAlt, transform }) => {
  return (
    <img style={{ transform }} className="Card" src={imgSrc} alt={imgAlt} />
  );
};

export default Card;