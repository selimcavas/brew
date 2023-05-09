import React from 'react';
import '../styles/NavBar.css';
import logo from '../assets/logo.svg';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar
      bg="myBrown"
      varient="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Nav.Link as={Link} to="/" id="mainPage">
        <Navbar.Brand id="brand">
          <img src={logo} id="logo" alt="logo" /> Brew
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle id="toggle" />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link class="active" as={Link} to="/order" id="orderPage">
            Order
          </Nav.Link>
          <Nav.Link class="active" as={Link} to="/my-order" id="myOrderPage">
            My Order
          </Nav.Link>
          <Nav.Link class="active" as={Link} to="/contact" id="contactPage">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
