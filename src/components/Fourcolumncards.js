import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './Fourcolumncards.css';

const FourColumnCards = () => {
  const products = [
    {
      id: 1,
      title: 'Pain Relief Cream',
      description: 'Effective cream for pain relief.',
      image: 'https://images.pexels.com/photos/13119976/pexels-photo-13119976.jpeg?',
      price: '₹150',
    },
    {
      id: 2,
      title: 'Vitamin C Tablets',
      description: 'Boost your immunity with Vitamin C.',
      image: 'https://images.pexels.com/photos/3873143/pexels-photo-3873143.jpeg',
      price: '₹250',
    },
    {
      id: 3,
      title: 'Hand Sanitizer',
      description: 'Stay safe with our premium sanitizer.',
      image: 'https://images.pexels.com/photos/8657358/pexels-photo-8657358.jpeg?',
      price: '₹99',
    },
    {
      id: 4,
      title: 'Face Masks',
      description: 'Pack of 10 high-quality masks.',
      image: 'https://images.pexels.com/photos/7735638/pexels-photo-7735638.jpeg?',
      price: '₹299',
    },
  ];

  return (
    <div className="four-column-cards container my-5">
      <h2 className="section-title text-center mb-4">Featured Products</h2>
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} md={3} sm={6}>
            <Card className="h-100">
              <Card.Img variant="top" src={product.image} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="price">{product.price}</span>
                  <Button variant="primary" size="sm">
                    Buy Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FourColumnCards;
