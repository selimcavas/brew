import React from 'react';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import latte from '../assets/latte.png';
import mocha from '../assets/mocha.png';
import frappe from '../assets/frappe.png';
import americano from '../assets/americano.png';
import '../styles/Main.css';

function Main() {
  return (
    <div className="Main" id="main">
      <NavBar />
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <Card
            imagePath={latte}
            imageAlt="Latte"
            title="Latte"
            subtitle="This is the best Latte you'll ever have!"
          />
          <br></br>
          <Card
            imagePath={mocha}
            imageAlt="Mocha"
            title="Mocha"
            subtitle="This is the best Mocha you'll ever have!"
          />
        </div>
        <div class="col-lg-6 col-md-12">
          <Card
            imagePath={americano}
            imageAlt="Americano"
            title="Americano"
            subtitle="This is the best Americano you'll ever have!"
          />
          <br></br>
          <Card
            imagePath={frappe}
            imageAlt="Frappe"
            title="Frappe"
            subtitle="This is the best Frappe you'll ever have!"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
