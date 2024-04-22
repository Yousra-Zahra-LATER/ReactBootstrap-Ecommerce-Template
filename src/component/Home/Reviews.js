import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import "./Reviews.css";
import item from "./../../assets/item.jpg";

export default function Reviews() {
  return (
    <Container style={{ backgroundColor: '#7c0f28', padding: '6rem 0' }} fluid>
         <h1 style={{ color: 'white' }} >Testimonials</h1>
         <div style={{ margin: '70px' }}> </div>
      <Row className='justify-content-center'> 
        <Col md={7} sm={10} style={{ backgroundColor: 'white', borderRadius:'30px'}}>
          <Carousel indicators >
            <Carousel.Item >
              <div style={{ margin: '70px' }}> </div>
              <img  className="rounded-image" src={item} alt="First slide" />
              <div style={{ margin: '20px' }}> </div>
              <p className="mx-5 mb-5" style={{ fontSize: '20px', lineHeight: '30px' }}>
                "Indulge in an exceptional culinary experience at a charming restaurant in the heart of the city  Savor exquisite cuisine in a cozy urban eatery. "
              </p>
              <span style={{ color: '#7c0f28', fontSize: '18px', lineHeight: '30px', fontFamily: 'Poppins' }}>-Eve Samara-</span>
              <div style={{ margin: '70px' }}> </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ margin: '70px' }}> </div>
              <img  className="rounded-image" src={item} alt="First slide" />
              <div style={{ margin: '20px' }}> </div>
              <p  className="mx-5 mb-5" style={{ fontSize: '20px', lineHeight: '30px' }}>
                "Indulge in an exceptional culinary experience at a charming restaurant in the heart of the city  Savor exquisite cuisine in a cozy urban eatery. "
              </p>
              <span style={{ color: '#7c0f28', fontSize: '18px', lineHeight: '30px', fontFamily: 'Poppins' }}>-Eve Samara-</span>
              <div style={{ margin: '70px' }}> </div>
            </Carousel.Item>
            <Carousel.Item>
              <div style={{ margin: '70px' }}> </div>
              <img  className="rounded-image" src={item} alt="First slide" />
              <div style={{ margin: '20px' }}> </div>
              <p   className="mx-5 mb-5" style={{ fontSize: '20px', lineHeight: '30px' }}>
                "Indulge in an exceptional culinary experience at a charming restaurant in the heart of the city  Savor exquisite cuisine in a cozy urban eatery. "
              </p>
              <span style={{ color: '#7c0f28', fontSize: '18px', lineHeight: '30px', fontFamily: 'Poppins'}}>-Eve Samara-</span>
              <div style={{ margin: '70px' }}> </div>
            </Carousel.Item>
          </Carousel>
           </Col>
      </Row>
    </Container>
  );
}
