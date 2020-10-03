import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import Logo from './Logo';

//avoid namespace conflict
function LT_Navbar() {
    return (
        <Navbar className="border-bottom">
          <Navbar.Brand href="/"><Logo/></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Our Solution</Nav.Link>
            <NavDropdown alignRight title="Work">
              <NavDropdown.Item href="/">All Video Work</NavDropdown.Item>
              <NavDropdown.Item href="/">Case Studies</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">FAQ</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Button size="sm" variant="outline-secondary">Get Started</Button>
          </Nav>
        </Navbar>
    );
}

export default LT_Navbar;
