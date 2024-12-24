import React from 'react';
import { Carousel } from 'react-bootstrap';

function ChemistCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/16453354/pexels-photo-16453354/free-photo-of-drug-store-in-town.jpeg?"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Quality Medicines</h3>
          <p>Best products for your health</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/8657296/pexels-photo-8657296.jpeg?"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Affordable Prices</h3>
          <p>Save more on every purchase</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ChemistCarousel;
