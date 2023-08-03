import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import '../styles/navbar.css';
import runningLogo from '../assets/running.png';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Navbar expand="lg" variant="dark" className="custom-navbar">
      <div className="container">
        <div className='navbar-brand-container'>
          <Navbar.Brand href="/"><b>Hot</b>Feet <img src={runningLogo} alt="Running Logo" className="running-logo" />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shoelist">Shoe List</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
