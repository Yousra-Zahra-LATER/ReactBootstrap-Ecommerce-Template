import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Header.css';

export default function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col md={6}>
            <h2>Good food choices are good investments.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <button>order now</button>
            <button>learn more</button>
          </Col>
          
        </Row>
      </Container>
    </header>
  );
}
