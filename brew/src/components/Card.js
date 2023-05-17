import React from 'react';
import '../styles/Card.css';

function Card(props) {
  return (
    <div className="card">
      <img
        src={props.imagePath}
        alt={props.imageAlt}
        price={props.price}
        width="300"
        height="300"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-subtitle mt-3">{props.subtitle}</p>
        <p id="price">{props.price}</p>
      </div>
    </div>
  );
}

export default Card;
