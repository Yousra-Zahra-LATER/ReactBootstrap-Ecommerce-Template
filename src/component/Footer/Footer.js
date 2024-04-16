import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

  return (
<footer style={{ backgroundColor: '#7c0f28', padding: '1rem 0' }} className="text-white ">  
    <Container>
        <Row>
        <Col>
  <ul className="list-unstyled d-flex justify-content-center">
    <li className="mx-3"><a href="#" style={{ textDecoration: 'none' , color: 'inherit'}}>Regiter</a></li>
    <li className="mx-3"><a href="#" style={{ textDecoration: 'none' , color: 'inherit'}}>Forum</a></li>
    <li className="mx-3"><a href="#" style={{ textDecoration: 'none' , color: 'inherit'}}>Affiliate</a></li>
    <li className="mx-3"><a href="#" style={{ textDecoration: 'none' , color: 'inherit'}}>FAQ</a></li>
  </ul>
</Col>
        </Row>
        <Row>
        <Col>
  <div className="d-flex justify-content-center">
  <a href="#" style={{ textDecoration: 'none' , color: 'inherit'}}><FontAwesomeIcon icon={faFacebook} className="m-2" /></a>
  <a href="#" style={{ textDecoration: 'none' , color: 'inherit'}}> <FontAwesomeIcon icon={faTwitter} className="m-2" /></a>
  <a href="#" style={{ textDecoration: 'none' , color: 'inherit'}}><FontAwesomeIcon icon={faInstagram} className="m-2" /></a>
  </div>
</Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center mt-5">&copy; {new Date().getFullYear()} Infinity. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
