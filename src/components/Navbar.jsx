import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import '../styles/navbar.css'
import logo from '../assets/logo/logo.png'


function NavbarBootstrap() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
     element.scrollIntoView({ behavior: 'smooth'})
  }
  return (
    <div className="nav-body">
    <Navbar expand="lg" className="bg-body-black">
      <Container className='d-flex nav-container'>
        <div className="left">
        <Navbar.Brand href="#home"><img className='navbar-logo' src={logo} alt="" /></Navbar.Brand>
        </div>
        <div className="right">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>scrollToSection('section2')} href="#about">About</Nav.Link>
            <Nav.Link onClick={()=>scrollToSection('section3')} href="#products">Products</Nav.Link>
            <Nav.Link onClick={()=>scrollToSection('section4')} href="#how-to-use">How to use</Nav.Link>
            <Nav.Link onClick={()=>scrollToSection('from-container')} href="#contact">Contact</Nav.Link>
            <button className='d-btn'>Download App</button>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavbarBootstrap;