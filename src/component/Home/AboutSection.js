import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import beef from '../../assets/beef.jpg';


export default function AboutSection() {
  return (
    <div id="ab-section">
    <section className="about">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <img src={beef} title="about" alt='About' />
          </Col>
          <Col md={6}>
            <h2>We pride ourselves on making real food from the best ingredients.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            <button> <a href="#">Learn More </a> </button>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
}