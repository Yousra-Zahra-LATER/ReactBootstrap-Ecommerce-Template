// ParallaxSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
export default function ParallaxSection() {
  return (
    <section className="paralex">
      <Container>
        <Row>
          <Col md={12}>
            <h2>When a man's stomach is full it makes <br/> a difference whether he is rich or poor. </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/>
              finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
            </p>
            <a href='#'> <FontAwesomeIcon icon={faPlay} />  Watch Our Story</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}