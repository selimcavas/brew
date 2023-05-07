import React from 'react';
import '../styles/NavBar.css';
import logo from '../assets/logo.svg';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar
      bg="myBrown"
      varient="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Navbar.Brand id="brand">
        <img src={logo} id="logo" /> Brew
      </Navbar.Brand>
      <Navbar.Toggle id="toggle" />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link class="active" id="orderPage" href="Order.js">
            Order
          </Nav.Link>
          <Nav.Link class="active" id="myOrderPage" href="MyOrder.js">
            My Order
          </Nav.Link>
          <Nav.Link class="active" id="contactPage" href="Contact.js">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
