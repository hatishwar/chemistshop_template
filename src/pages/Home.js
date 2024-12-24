import React from 'react';
import ChemistCarousel from '../components/Carousel';
import FourColumnCards from '../components/Fourcolumncards';
import './Home.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section: Carousel */}
      <ChemistCarousel />

      {/* Products Section */}
      <div className="container my-5">
        <h2 className="section-title text-center mb-4">Our Products</h2>
        <p className="section-description text-center mb-5">
          Explore a wide range of high-quality medicines, healthcare products, and supplements designed to meet your needs.
        </p>
        <FourColumnCards />
      </div>

      {/* Special Offers Section */}
      <div className="special-offers bg-light py-5">
        <div className="container text-center">
          <h3 className="section-title mb-4">Special Offers</h3>
          <p className="section-description mb-4">
            Don't miss out on our limited-time deals and discounts. Shop now and save more!
          </p>
          <button className="btn btn-primary">View Offers</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
