import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

  return (
<footer style={{ backgroundColor: '#7c0f28', padding: '2rem 0' }} className="text-white ">  
    <Container >
        <Row >
        <Col >
  <ul className="list-unstyled d-flex justify-content-center">
    <li className="mx-3"><a href="#" style={{ textDecoration: 'none' , color: 'inherit'}}>Regiter</a></li>
    <li className="mx-3"><a href="#" style={{ textDecoration: 'none' , color: 'inherit'}}>Forum</a></li>
    <li className="mx-3"><a href="#" style={{ textDecoration: 'none' , color: 'inherit'}}>Affiliate</a></li>
    <li className="mx-3"><a href="#" style={{ textDecoration: 'none' , color: 'inherit'}}>FAQ</a></li>
  </ul>

  <div className="d-flex justify-content-center">
  <a href="#" style={{ textDecoration: 'none' , color: 'inherit'}}><FontAwesomeIcon icon={faFacebook} className="m-2" /></a>
  <a href="#" style={{ textDecoration: 'none' , color: 'inherit'}}> <FontAwesomeIcon icon={faTwitter} className="m-2" /></a>
  <a href="#" style={{ textDecoration: 'none' , color: 'inherit'}}><FontAwesomeIcon icon={faInstagram} className="m-2" /></a>
  </div>

            <p className="text-center mt-4 mb-0" style={{ fontSize: '13px'}}>&copy; {new Date().getFullYear()} Infinity. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
