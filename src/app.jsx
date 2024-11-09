import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scoreboard } from './scoreboard/scoreboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function App() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg" sticky="top">
            <Container fluid>
              <Navbar.Brand href="/login">
                <h2>Temple Guesser</h2>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarSupportedContent" />
              <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="me-auto">
                  <NavLink className='nav-link' to='/login'>Login</NavLink>
                  <NavLink className='nav-link' to='/play'>Play</NavLink>
                  <NavLink className='nav-link' to='/scoreboard'>Scoreboard</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
  
          <Routes>
            <Route path='/login' element={<Login />} exact />
            <Route path='/play' element={<Play />} />
            <Route path='/scoreboard' element={<Scoreboard />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
  
          <footer className="footer">
            <span>Kaydance Gillam </span>
            <a href="https://github.com/kaydikat/startup.git">GitHub</a>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
  
  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }