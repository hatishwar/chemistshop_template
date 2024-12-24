import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './Products.css';

const Products = () => {
  const products = [
    { id: 1, name: 'Paracetamol Tablets', price: '₹50', image: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?' },
    { id: 2, name: 'Vitamin C Tablets', price: '₹120', image: 'https://images.pexels.com/photos/4058232/pexels-photo-4058232.jpeg?' },
    { id: 3, name: 'Blood Pressure Monitor', price: '₹2000', image: 'https://images.pexels.com/photos/7904482/pexels-photo-7904482.jpeg?' },
    { id: 4, name: 'Cough Syrup', price: '₹90', image: 'https://images.pexels.com/photos/8657300/pexels-photo-8657300.jpeg?' },
    { id: 5, name: 'First Aid Kit', price: '₹450', image: 'https://images.pexels.com/photos/7722673/pexels-photo-7722673.jpeg?' },
    { id: 6, name: 'Pain Relief Spray', price: '₹150', image: 'https://images.pexels.com/photos/8657359/pexels-photo-8657359.jpeg?' },
    { id: 7, name: 'Multivitamins', price: '₹250', image: 'https://images.pexels.com/photos/3683081/pexels-photo-3683081.jpeg?' },
    { id: 8, name: 'Thermometer', price: '₹300', image: 'https://images.pexels.com/photos/7722790/pexels-photo-7722790.jpeg' },
  ];

  return (
    <div className="container my-5">
      {/* Page Header */}
      <h1 className="section-title text-center mb-4">Our Products</h1>
      <p className="section-description text-center mb-5">
        We offer a wide range of healthcare products, medicines, and equipment to meet your needs.
      </p>

      {/* Product Grid */}
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} lg={3} md={4} sm={6}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: {product.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;

