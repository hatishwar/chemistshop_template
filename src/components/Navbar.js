import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const ChemistNavbar = () => {
  return (
    <>
      {/* Main Navbar */}
      <Navbar bg="primary" expand="lg" variant="dark" sticky="top" className="custom-navbar">
        <Container>
          {/* Brand Name */}
          <Navbar.Brand as={Link} to="/">
            <img 
              src="https://www.codester.com/static/uploads/items/000/014/14988/preview-xl.jpg" 
              alt="Chemist Shop Logo" 
              height="40" 
              className="me-2"
            />
            Chemist Shop
          </Navbar.Brand>
          
          {/* Toggle Button for Offcanvas */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          
          {/* Offcanvas Menu */}
          <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/products">Products</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default ChemistNavbar;
