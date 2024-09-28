import React, { useState } from 'react';
import data from '../data.json';
import Product from './Product';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    //fetching data 
    const [products, setProducts] = useState(data);
    console.log(setProducts);
    
    
   
  return (
    <Container>
      <h3>Desserts</h3>
      <Row>
        {products.map ((proudct, index) => (
          <Col lg={4} md={6} sm={12} key={index}>
            <Product  {...proudct} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Main
