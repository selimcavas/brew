import React from 'react';
import '../styles/OrderForm.css';
function Order() {
  return (
    <div id="orderDiv">
      <form id="orderForm">
        <br />
        <header>Order Form</header>
        <input
          type="text"
          id="customerName"
          placeholder="NAME"
          class="formElements"
        />
        <input
          type="text"
          id="customerSurname"
          placeholder="SURNAME"
          class="formElements"
        />
        <select id="coffees" class="formElements">
          <option value="" disabled selected>
            SELECT YOUR DREAM COFFEE!
          </option>
          <option value="1">Latte</option>
          <option value="2">Americano</option>
          <option value="3">Mocha</option>
          <option value="4">Frappe</option>
        </select>
        <label for="quantity">Quantity</label>
        <input type="number" id="quantity" min="1" />
        <br></br>
        <label for="tableNumber">Table Number</label>
        <input type="number" id="tableNumber" min="1" max="25" />
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
