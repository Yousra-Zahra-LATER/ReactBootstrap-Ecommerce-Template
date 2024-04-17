import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Barre() {
  return (
    <section>
      <Container>
      <Row className="justify-content-center">
  <Col md={6} >
    <h1 style={{ color: '#7c0f41', fontFamily: 'Poppins', fontSize: 29 }} className="mb-4">
      Hurry up! Subscribe our newsletter <br/> and get 25% Off
    </h1>
    <p>Limited time offer for this month. No credit card required.</p>
    <Form.Control type="email" placeholder="Add Email Address here" 
     style={{
      transition: 'box-shadow 0.2s, border-color 0.2s',
      borderColor: '#ced4da', // Couleur de la bordure par défaut
    }}
    onFocus={(e) => {
      e.target.style.boxShadow = '0 0 0 0.2rem rgba(124, 15, 40, 0.25)'; // Ombre portée rose lorsqu'il est cliqué
      e.target.style.borderColor = '#7c0f28'; // Couleur de la bordure en rose lorsqu'il est cliqué
    }}
    onBlur={(e) => {
      e.target.style.boxShadow = ''; // Réinitialiser l'ombre portée lorsque le champ de formulaire perd le focus
      e.target.style.borderColor = '#ced4da'; // Réinitialiser la couleur de la bordure lorsque le champ de formulaire perd le focus
    }}/>
    <button style={{
    backgroundColor: '#7c0f28',
    border: '0px solid #7c0f28',
    boxSizing: 'border-box',
    width: '140px',
    height: '40px',
    textAlign: 'center',
    transition: '0.2s ease',
    marginTop: '20px',
    color: 'white',
    fontWeight: 'bold'
}}>
  Subscribe
</button>

    </Col>
    <div className='mt-5'></div>
    </Row>
    
   
      </Container>
    </section>
  );
}

export default Barre;