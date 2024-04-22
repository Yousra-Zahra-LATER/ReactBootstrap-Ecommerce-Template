// IngredientsSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import aboutt from '../../assets/aboutt.png';

export default function IngredientsSection() {
  return (
    <section className="ingredients">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <h2>We make everything by hand with the best possible ingredients.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul>
              <li> <FontAwesomeIcon icon={faCheck} size="1x" color="#860A35" />  Etiam sed dolor ac diam volutpat.</li>
              <li><FontAwesomeIcon icon={faCheck} size="1x" color="#860A35" />  Erat volutpat aliquet imperdiet.</li>
              <li><FontAwesomeIcon icon={faCheck} size="1x" color="#860A35" />  purus a odio finibus bibendum.</li>
            </ul>
            <button> <a href="#">Learn More </a> </button>
          </Col>
          <Col md={6}>
            <img src={aboutt} title="about" alt='About' />
          </Col>
        </Row>
      </Container>
    </section>
  );
}