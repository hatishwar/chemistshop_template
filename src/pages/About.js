import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page container my-5">
      {/* Header Section */}
      <h1 className="section-title text-center mb-4">About Us</h1>
      <p className="section-description text-center mb-5">
        Learn more about our mission, vision, and the commitment to serving our community.
      </p>

      {/* About Details Section */}
      <div className="about-details">
        <h2 className="about-subtitle">Who We Are</h2>
        <p>
          Established in 2020, Chemist Shop has been a trusted provider of high-quality medicines and healthcare products. 
          We are dedicated to offering a comprehensive range of products and services to meet the needs of our customers.
        </p>

        <h2 className="about-subtitle">Our Mission</h2>
        <p>
          To ensure access to affordable and reliable healthcare products for everyone, while maintaining the highest 
          standards of quality and customer service.
        </p>

        <h2 className="about-subtitle">Our Vision</h2>
        <p>
          To be a leading provider of healthcare solutions, empowering individuals to live healthier lives.
        </p>

        <h2 className="about-subtitle">Why Choose Us</h2>
        <ul>
          <li>Wide range of products, including medicines, healthcare equipment, and supplements.</li>
          <li>Competitive pricing and frequent discounts.</li>
          <li>Friendly and knowledgeable staff to assist you.</li>
          <li>Commitment to customer satisfaction and health.</li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="about-image-section my-5 text-center">
        <img
          src="https://images.pexels.com/photos/8539999/pexels-photo-8539999.jpeg?"
          alt="Our Team"
          className="img-fluid rounded"
        />
        <p className="mt-3">Our dedicated team is here to serve you!</p>
      </div>

      {/* Call to Action */}
      <div className="about-cta text-center mt-5">
        <h3>Join Us in Promoting Health and Wellness</h3>
        <p>We look forward to serving you and being part of your healthcare journey.</p>
        <button className="btn btn-primary mt-3">Contact Us</button>
      </div>
    </div>
  );
};

export default About;

