import React from 'react';
import OrderCard from '../components/MyOrderCard';

function MyOrder() {
  return (
    <div id="myOrders">
      <OrderCard
        coffeeType="americano"
        name="Classic Americano"
        price="4.99"
        time="1 hour ago"
      />
      <OrderCard
        coffeeType="latte"
        name="Latte"
        price="4.99"
        time="1 hour ago"
      />
      <OrderCard
        coffeeType="frappe"
        name="Frappe"
        price="4.99"
        time="1 hour ago"
      />
      <OrderCard
        coffeeType="mocha"
        name="Mocha"
        price="4.99"
        time="1 hour ago"
      />
    </div>
  );
}

export default MyOrder;
