import React, { useEffect, useState } from 'react';
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo_25w@2x.png'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Cuando el desplazamiento es mayor que 0, cambia el estado para aplicar estilos diferentes
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = scrolled ? 'navbar scrolled' : 'navbar';

  
  
  
    return (

    <Navbar expand="lg" className="bg-body-tertiary position">
    <Container>
    <img
              src={logo}
              width="95"
              height="25"
              className="d-inline-block align-top"
              alt="25w logo"
            />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className='navbar-button' >Home</Nav.Link>
          <Nav.Link href="#aboutus" className='navbar-button'>About us</Nav.Link>
          <Nav.Link href="#services" className='navbar-button'>Services</Nav.Link>
          <Nav.Link href="#produucts" className='navbar-button'>Products</Nav.Link>
          <Nav.Link href="#details" className='navbar-button'>Details</Nav.Link>
          <Nav.Link href="#contact" className='navbar-button'>Contact</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}

export default Header
