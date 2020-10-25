import React from 'react';

import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Logo from './Logo';

//avoid namespace conflict
function LT_Navbar() {
    return (
        <Navbar className="border-bottom navbar" sticky="top" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand>
            <Link to="/">
              <Logo/>
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
          <Nav.Link href="/creative-profile">temp</Nav.Link>
            <Nav.Link href="/case-studies">Case Studies</Nav.Link>
            <Nav.Link href="/idea">Idea Network</Nav.Link>
            <Nav.Link href="/frequently-asked-questions">FAQ</Nav.Link>
            <Nav.Link href="/bidding">Contact</Nav.Link>
            <Link to="/bidding">
              <Button size="sm" variant="outline-secondary">Get Started</Button>
            </Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}

export default LT_Navbar;

