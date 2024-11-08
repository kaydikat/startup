import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function App() {
  return (
    <div>
        <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
            <Navbar.Brand href="https://getbootstrap.com/">
                <h2>Temple Guesser</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
                <Nav.Link href="home.html">Home</Nav.Link>
                <Nav.Link href="play.html">Play</Nav.Link>
                <Nav.Link href="scoreboard.html">Scoreboard</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <main>App components go here</main>
        <footer>
        <span>Kaydance Gillam</span>
        <a href="https://github.com/kaydikat/startup.git">GitHub</a>
        </footer>
    </div>
  )
}