import React from 'react';
import '../styles/Card.css';

function Card(props) {
  return (
    <div className="card">
      <img
        src={props.imagePath}
        alt={props.imageAlt}
        width="300"
        height="300"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-subtitle mt-2">{props.subtitle}</p>
      </div>
    </div>
  );
}

export default Card;
