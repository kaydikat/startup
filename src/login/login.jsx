import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 left-side d-flex flex-column align-items-top align-items-center">
            <header>
              <h1 className="title">Temple Guesser</h1>
            </header>
            <h2>How to Play</h2>
            <p>This game is a fun way to test your geography skills. You will be given the name of an LDS temple and you will have to guess its location on the map. The closer you are to the actual location, the more points you will earn. Have fun competing with your friends to see who can get the highest score!</p>
            <div id="picture" className="picture-box">
              <img
                src="https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
                alt="Salt Lake Temple"
              />
            </div>
          </div>
          
          <div className="col-6 right-side d-flex flex-column justify-content-center align-items-center">
            <div>
            {authState === AuthState.Unauthenticated && <h1>Login or Sign Up</h1>}
            {authState === AuthState.Authenticated && <h1>Welcome</h1>}
              {authState === AuthState.Authenticated && (
                <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
              )}
              {authState === AuthState.Unauthenticated && (
                <Unauthenticated
                  userName={userName}
                  onLogin={(loginUserName) => {
                    onAuthChange(loginUserName, AuthState.Authenticated);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}