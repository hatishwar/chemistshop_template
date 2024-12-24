import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page container my-5">
      {/* Page Header */}
      <h1 className="section-title text-center mb-4">Contact Us</h1>
      <p className="section-description text-center mb-5">
        We're here to help! Reach out to us through any of the channels below.
      </p>

      {/* Contact Details */}
      <div className="row contact-details">
        <div className="col-md-6">
          <h2 className="contact-subtitle">Our Address</h2>
          <p>123 Chemist Street, Health City, India</p>
          <h2 className="contact-subtitle">Phone</h2>
          <p>+91-1234567890</p>
          <h2 className="contact-subtitle">Email</h2>
          <p>info@chemistshop.com</p>
          <h2 className="contact-subtitle">Working Hours</h2>
          <p>Monday to Saturday: 9:00 AM - 8:00 PM</p>
          <p>Sunday: 10:00 AM - 6:00 PM</p>
        </div>

        {/* Location Map */}
        <div className="col-md-6">
          <h2 className="contact-subtitle">Our Location</h2>
          <iframe
            title="Chemist Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31622.9867880455!2d77.10249089300227!3d28.704059988868172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d035a7436ae41%3A0xa2b9f63a9e7f6f3e!2sHealth%20City!5e0!3m2!1sen!2sin!4v1690088478293!5m2!1sen!2sin"
            className="map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form mt-5">
        <h2 className="contact-subtitle text-center">Send Us a Message</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input type="text" className="form-control" id="name" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" id="email" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

