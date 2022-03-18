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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">

     

      <Image style={{ height: "100px", width: "",  }} src={logo} />
     
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#features">Heading</Nav.Link>
          <Nav.Link href="#features">Heading</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>

    <div>
      <Footer />
    </div>
    </div>
  );
}