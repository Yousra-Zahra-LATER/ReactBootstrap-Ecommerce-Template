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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About us</Nav.Link>
                <Nav.Link href="#home">Explore Foods</Nav.Link>
                <Nav.Link href="#link">Reviews</Nav.Link>
                <Nav.Link href="#home">FAQ</Nav.Link>
              </Nav>

              <Nav>
            <Nav.Link id='phone'> <FontAwesomeIcon icon={faPhone} size="1x" color="#fff"/> {''} 1800 789 123</Nav.Link>
               </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
