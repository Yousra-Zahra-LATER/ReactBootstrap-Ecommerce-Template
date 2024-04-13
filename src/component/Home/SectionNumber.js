import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SectionNumber.css';
export default function () {
  return (
    <Container className="sectionNumber" fluid='true'>
      <Row >
        <Col md={3}>
        <h2>1287+</h2>
        <h6>SAVINGS</h6>
        </Col>

        <Col md={3}>
        <h2>5786+</h2>
        <h6>PHOTOS</h6>
        </Col>

        <Col md={3}>
        <h2>1440+</h2>
        <h6>ROCKETS</h6>
        </Col>
        <Col  md={3}> 
        <h2>7110+</h2>
        <h6>GLOBES</h6>
        </Col>
      </Row>
    </Container>
   
  )
}
