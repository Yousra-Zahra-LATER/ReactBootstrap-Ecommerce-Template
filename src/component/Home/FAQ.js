import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FAQ() {
    return (
    
        <Container fluid="md">
    <div style={{ margin: '80px' }}> </div>
    <h1>Frequently Asked Questions</h1>
  
    <div style={{ margin: '80px' }}> </div>

     <Row className="justify-content-center">
      <Col md={5} className="mb-4">
      <h4 style={{ fontSize: '18px', letterSpacing: '0.2px', color:'#7c0f21',textAlign:"left"}}> <span style={{ fontSize: '25px', color:'black'}}>~</span> Is Foodera Bread really baked fresh each day?  </h4>
        <p   style={{textAlign:"left"}} >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
        </Col>
      <Col md={5} className="mb-4">
      <h4 style={{ fontSize: '18px', letterSpacing: '0.2px' ,color:'#7c0f28',textAlign:"left" }}><span style={{ fontSize: '25px', color:'black'}}>~</span> Do you bake breads containing animal fats or products?</h4>
      <p  style={{textAlign:"left"}} >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p> 
      </Col> 
       <Col md={5} className="mb-4">
       <h4 style={{ fontSize: '18px', letterSpacing: '0.2px',color:'#7c0f28',textAlign:"left"  }}><span style={{ fontSize: '25px', color:'black'}}>~</span> Can I order your products online?</h4>
        <p  style={{textAlign:"left"}} >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
        </Col>
      <Col md={5} className="mb-4">
      <h4 style={{ fontSize: '18px', letterSpacing: '0.2px',color:'#7c0f21'  ,textAlign:"left"}}><span style={{ fontSize: '25px', color:'black'}}>~</span> When are you opening a shop near me?</h4>
        <p  style={{textAlign:"left"}} >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
      </Col> 
      </Row>
          
      <div style={{ margin: '100px' }}> </div>
        </Container>
 
      );
}
