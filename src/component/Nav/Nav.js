import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';
import infinity from '../../assets/infinity.svg';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function NAV() {
    return (
        <Navbar  expand="sm" className="sticky-top shadow " >
          <Container>
            <Navbar.Brand href="#home">
              <img src={infinity} title='logo' alt='logo'/>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
                <Nav.Link href="#head-section">Home</Nav.Link>
                <Nav.Link href="#ab-section">About us</Nav.Link>
                <Nav.Link href="#exp-section">Explore Foods</Nav.Link>
                <Nav.Link href="#rev-section">Reviews</Nav.Link>
              <Nav.Link href="#faq-section">FAQ</Nav.Link>
              </Nav>
              <Nav>
            <Nav.Link id='phone'> <FontAwesomeIcon icon={faPhone} size="1x" color="#fff"/> {''} 1800 789 123</Nav.Link>
               </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
