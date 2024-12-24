import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-4">
      <Container>
        <Row>
          {/* Quick Links Section */}
          <Col md={4} sm={6}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/products" className="footer-link">Products</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>

          {/* Contact Information Section */}
          <Col md={4} sm={6}>
            <h5>Contact Us</h5>
            <p>
              <strong>Address:</strong> 123 Chemist Lane, Health City, India
            </p>
            <p>
              <strong>Phone:</strong> +91-9876543210
            </p>
            <p>
              <strong>Email:</strong> info@chemistshop.com
            </p>
          </Col>

          {/* Social Media Section */}
          <Col md={4} sm={12}>
            <h5>Follow Us</h5>
            <div className="social-icons d-flex">
              <a href="https://facebook.com" className="me-3 footer-icon"><FaFacebookF /></a>
              <a href="https://twitter.com" className="me-3 footer-icon"><FaTwitter /></a>
              <a href="https://instagram.com" className="me-3 footer-icon"><FaInstagram /></a>
              <a href="https://linkedin.com" className="footer-icon"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider my-4" />

        {/* Copyright Section */}
        <div className="text-center py-2">
          <small>&copy; {new Date().getFullYear()} Chemist Shop. All Rights Reserved.</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
