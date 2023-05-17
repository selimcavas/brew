import React from 'react';
import '../styles/MyOrderCard.css';
import americano from '../assets/americano.png';
import frappe from '../assets/frappe.png';
import latte from '../assets/latte.png';
import mocha from '../assets/mocha.png';

function MyOrderCard(props) {
  const { coffeeType, name, quantity, price, time } = props;

  // Determine image source based on coffeeType
  let imageSrc;
  switch (coffeeType) {
    case 'Americano':
      imageSrc = americano;
      break;
    case 'Frappe':
      imageSrc = frappe;
      break;
    case 'Latte':
      imageSrc = latte;
      break;
    case 'Mocha':
      imageSrc = mocha;
      break;
  }

  return (
    <div className="order-card">
      <img src={imageSrc} alt={coffeeType} className="order-card-image" />
      <div className="order-card-info">
        <h3>{name}</h3>
        <p id="quantity">Quantity: {quantity}</p>
        <p id="price">Total Price: {price} $</p>
        <p>Order time: {time}</p>
      </div>
    </div>
  );
}

export default MyOrderCard;
