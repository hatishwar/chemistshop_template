import React from 'react';
import './Prenav.css';

const PreNav = () => {
  return (
    <div className="pre-nav bg-light text-dark d-flex justify-content-between align-items-center px-3 py-1">
      {/* Left Section: Contact Information */}
      <div>
        <small>
          📞 Call us: <a href="tel:+911234567890">+91-1234567890</a> | ✉️ Email: <a href="mailto:info@chemistshop.com">info@chemistshop.com</a>
        </small>
      </div>

      {/* Right Section: Social Media Links */}
      <div>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default PreNav;

