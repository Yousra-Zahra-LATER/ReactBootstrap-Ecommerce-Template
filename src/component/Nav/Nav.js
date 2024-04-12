import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Nav.css';
import logo from '../../assets/logo.jpg';
export default function NAV() {
    return (
        <Navbar expand="lg" >
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} title='logo'/>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About us</Nav.Link>
                <Nav.Link href="#home">Explore Foods</Nav.Link>
                <Nav.Link href="#link">Reviews</Nav.Link>
                <Nav.Link href="#home">FAQ</Nav.Link>
              </Nav>

              <Nav>
            <Nav.Link id='phone'>1800 789 123</Nav.Link>
               </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
