import React from 'react';

import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Logo from './Logo';

//avoid namespace conflict
function LT_Navbar() {
    return (
        <Navbar className="border-bottom">
          <Navbar.Brand>
            <Link to="/">
              <Logo/>
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Our Solution</Nav.Link>
            <Nav.Link href="/">Work</Nav.Link>
            
            <Nav.Link href="/">FAQ</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Link to="/bidding">
              <Button size="sm" variant="outline-secondary">Get Started</Button>
            </Link>
          </Nav>
        </Navbar>
    );
}

export default LT_Navbar;

