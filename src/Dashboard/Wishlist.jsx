import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from '../assets/images/bs3.png';
import Img2 from '../assets/images/bss1.png';
import Img3 from '../assets/images/bss2.png';
import Img4 from '../assets/images/bss3.png';

import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const products = [
    { id: 1, name: 'Half Running Set', price: 119.00, image: Img1 },
    { id: 2, name: 'Half Running Set', price: 119.00, image: Img2 },
    { id: 3, name: 'Half Running Set', price: 119.00, image: Img4 },
    { id: 4, name: 'Half Running Set', price: 119.00, image: Img3 },
]
const Wish = () => {
    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>
                        <Card style={{ position: 'relative',marginTop:'20px' }}>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>₹ {product.price.toFixed(2)}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Wish;
