import React from 'react';
import '../styles/MyOrderCard.css';
import americano from '../assets/americano.png';
import frappe from '../assets/frappe.png';
import latte from '../assets/latte.png';
import mocha from '../assets/mocha.png';

function MyOrderCard(props) {
  const { coffeeType, name, price, time } = props;

  // Determine image source based on coffeeType
  let imageSrc;
  switch (coffeeType) {
    case 'americano':
      imageSrc = americano;
      break;
    case 'frappe':
      imageSrc = frappe;
      break;
    case 'latte':
      imageSrc = latte;
      break;
    case 'mocha':
      imageSrc = mocha;
      break;
  }

  return (
    <div className="order-card">
      <img src={imageSrc} alt={coffeeType} className="order-card-image" />
      <div className="order-card-info">
        <h3>{name}</h3>
        <p>{price} USD</p>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default MyOrderCard;
