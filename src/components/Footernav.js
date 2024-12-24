import React from 'react';
import './Footernav.css';

const FooterNav = () => {
  return (
    <div className="footer-nav bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Column 1: Quick Links */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/products" className="footer-link">Products</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Column 2: Categories */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li><a href="/products?category=medicines" className="footer-link">Medicines</a></li>
              <li><a href="/products?category=healthcare" className="footer-link">Healthcare</a></li>
              <li><a href="/products?category=equipment" className="footer-link">Equipment</a></li>
              <li><a href="/products?category=supplements" className="footer-link">Supplements</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>📞 +91-1234567890</li>
              <li>✉️ info@chemistshop.com</li>
              <li>📍 123 Chemist Lane, City Center</li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Follow Us</h5>
            <div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;

