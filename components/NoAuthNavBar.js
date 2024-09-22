/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';

export default function NoAuthNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand className="playwrite-de-grund-font">i&apos;m a sandbox, daddy</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/room1">
              <Nav.Link>room one</Nav.Link>
            </Link>
            <Link passHref href="/room2">
              <Nav.Link>room two</Nav.Link>
            </Link>
            <Link passHref href="/room3">
              <Nav.Link>room three</Nav.Link>
            </Link>
            <Link passHref href="/room4">
              <Nav.Link>room four</Nav.Link>
            </Link>
            <Link passHref href="/room5">
              <Nav.Link>room five</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
