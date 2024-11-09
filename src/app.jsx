import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scoreboard } from './scoreboard/scoreboard';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

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

                  {authState === AuthState.Authenticated && (
                  <NavLink className='nav-link' to='/play'>Play</NavLink>
                    )}

                    {authState === AuthState.Authenticated && (
                  <NavLink className='nav-link' to='/scoreboard'>Scoreboard</NavLink>
                    )}
                    
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
  
          <Routes>
            <Route path="/" element={<Login />} exact />
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