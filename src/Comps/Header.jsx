import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <div className="container sticky-top">
      <Navbar expand="lg" variant="light">
        <Navbar.Brand className="logo me-auto" href='/'><span id='tilde'>~</span> Ghassaan</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link className="myLinks" href="#home" style={{ marginRight: '3rem' }}>Home</Nav.Link>
            <Nav.Link className="myLinks" href="#about" style={{ marginRight: '3rem' }}>About</Nav.Link>
            <Nav.Link className="myLinks" href="#team" style={{ marginRight: '3rem' }}>Team</Nav.Link>
            <Nav.Link className="myLinks" href="#portfolio" style={{ marginRight: '3rem' }}>Portfolio</Nav.Link>
            <Nav.Link className="myLinks" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
