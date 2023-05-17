import axios from 'axios';
import { useEffect, useState } from 'react';
import MyOrderCard from './components/MyOrderCard';

export function OrderFunc() {
  const customerName = document.getElementById('customerName').value;
  const customerSurname = document.getElementById('customerSurname').value;
  const coffeeType = document.getElementById('coffees').value;
  const quantity = document.getElementById('quantity').value;
  const tableNumber = document.getElementById('tableNumber').value;
  const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  let price;

  if (coffeeType == 'Latte') {
    price = 4.5;
  } else if (coffeeType == 'Americano') {
    price = 4.0;
  } else if (coffeeType == 'Mocha') {
    price = 5.0;
  } else if (coffeeType == 'Frappe') {
    price = 6.0;
  }

  price *= quantity;

  const orderData = {
    customerName,
    customerSurname,
    coffeeType,
    quantity,
    price,
    tableNumber,
    time,
  };

  axios
    .post('http://localhost:3001/orders', orderData)
    .then((response) => {
      console.log(response.data); // Handle successful response
    })
    .catch((error) => {
      console.error(error); // Handle error
    });
  return alert('Order Successfull!');
}

export function ContactFunc() {
  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create a data object with the form values
  const contactData = {
    name: name,
    email: email,
    message: message,
  };

  // Make a POST request using Axios
  axios
    .post('http://localhost:3001/contacts', contactData)
    .then((response) => {
      // Handle the response
      console.log(response.data);
    })
    .catch((error) => {
      // Handle the error
      console.error(error);
    });

  alert('Message sent!');
}

export function OrderCards() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3001/orders')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (orders === undefined || orders === null || orders.length === 0) {
    return (
      <h2 id="initialMessage" style={{ textAlign: 'center' }}>
        You haven't ordered yet. Go get some!
      </h2>
    );
  }

  return (
    <div>
      {orders.map((order) => (
        <MyOrderCard
          key={order.id}
          coffeeType={order.coffeeType}
          name={order.customerName + ' ' + order.customerSurname}
          time={order.time}
          price={order.price}
          quantity={order.quantity}
        />
      ))}
    </div>
  );
}
export function preventSpamMessages() {}
