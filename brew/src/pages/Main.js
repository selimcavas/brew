import React from 'react';
import Card from '../components/Card';
import latte from '../assets/latte.png';
import mocha from '../assets/mocha.png';
import frappe from '../assets/frappe.png';
import americano from '../assets/americano.png';
import '../styles/Main.css';

function Main() {
  return (
    <div className="Main" id="mainDiv">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <Card
            imagePath={latte}
            imageAlt="Latte"
            title="Latte"
            subtitle=" Smooth and velvety espresso combined with creamy steamed milk for a perfect balance of boldness and sweetness."
          />
          <br></br>
          <Card
            imagePath={mocha}
            imageAlt="Mocha"
            title="Mocha"
            subtitle="Decadent espresso and chocolate come together in a rich and indulgent drink, topped with whipped cream for the ultimate treat."
          />
        </div>
        <div class="col-lg-6 col-md-12">
          <Card
            imagePath={americano}
            imageAlt="Americano"
            title="Americano"
            subtitle="Strong and bold espresso shots diluted with ice for a smooth and refreshing coffee experience, perfect for hot weathers"
          />
          <br></br>
          <Card
            imagePath={frappe}
            imageAlt="Frappe"
            title="Frappe"
            subtitle="A refreshing blend of espresso, milk, and ice, finished with a dollop of whipped cream and a drizzle of caramel or chocolate sauce."
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
