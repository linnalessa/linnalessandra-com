import React from "react";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import logo from './logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


export default function App() {
  return (
    <div>
    <Navbar className="color-nav" collapseOnSelect expand="lg" bg="black" variant="dark">
      <Navbar.Brand href="home">
      <img
        src={logo}
        width=""
        height="60"
        className="d-inline-block align-top"
        alt="Linn Alessandra logo"
      />
   
  
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="mr-auto">
          <Nav.Link href="about">ABOUT</Nav.Link>
          <Nav.Link href="heading"></Nav.Link>
          <Nav.Link href="heading">PORTFOLIO</Nav.Link>
          <Nav.Link href="Contact">CONTACT</Nav.Link>
          
        </Nav>

  
        
      </Navbar.Collapse>
    </Navbar>

    <div>
      <Footer />
    </div>
    </div>
  );
}