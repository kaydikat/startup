import React from 'react';

export function Login() {
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
            <h2>Login or Sign Up</h2>
                    <form method="get" action="play.html">
              <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input className="form-control" type="text" placeholder="your@email.com" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">🔒</span>
                <input className="form-control" type="password" placeholder="password" />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
              <button type="submit" className="btn btn-secondary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}