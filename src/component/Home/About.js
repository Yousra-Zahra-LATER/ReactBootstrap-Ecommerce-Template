import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import beef from '../../assets/beef.jpg';
import "./About.css";
export default function About() {
  return (
    <Container className="about" >
      <Row>
        <Col md={6} ><img src={beef} title="about" alt='About' /></Col>
        <Col md={6} className="tol">
        <h2>We pride ourselves on making real food from the best ingredients.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
        <button > <a href="#">Learn More </a> </button>
        </Col>
      </Row>   
    </Container>
  )
}
