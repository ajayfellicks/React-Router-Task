import React from "react";
import "./Card.css";
const Card = ({ element, index }) => {
  return (
    <div key={element.id} className="card-container">
      <div className="img-container">
        <img src={element.image} alt="#" className="img" />
      </div>
      <h1 className="title">{element.title}</h1>
      <h3 className="author">
        <span>by</span> {element.author}
      </h3>
      <p className="date">{element.date}</p>
    </div>
  );
};

export default Card;
