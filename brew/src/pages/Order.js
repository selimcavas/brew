import React from 'react';
import '../styles/OrderForm.css';
import { OrderFunc } from '../backend.js';

function Order() {
  return (
    <div id="orderDiv">
      <form id="orderForm" onSubmit={OrderFunc}>
        <br />
        <header>Order Form</header>
        <input
          type="text"
          id="customerName"
          placeholder="NAME"
          class="formElements"
          required
        />
        <input
          type="text"
          id="customerSurname"
          placeholder="SURNAME"
          class="formElements"
          required
        />
        <select id="coffees" class="formElements" required>
          <option value="" disabled selected>
            SELECT YOUR DREAM COFFEE!
          </option>
          <option value="Latte">Latte</option>
          <option value="Americano">Americano</option>
          <option value="Mocha">Mocha</option>
          <option value="Frappe">Frappe</option>
        </select>
        <input
          type="number"
          id="quantity"
          placeholder="Quantity to be ordered"
          class="formElements"
          min="1"
          max="10"
          required
        />
        <input
          type="number"
          id="tableNumber"
          placeholder="Table Number"
          class="formElements"
          min="1"
          max="25"
          required
        />
        <input
          type="submit"
          id="submitOrder"
          value="Order Your Dream Coffee!"
          class="formElements"
        />
      </form>
    </div>
  );
}

export default Order;
