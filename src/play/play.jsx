import React from 'react';
import './play.css';

export function Play() {
  return (
    <main className="container-fluid">
      <div className="row">
        <aside className="col-md-2 sidebar">
            <div className="players">
              Player
              <span className="player-name">Mystery player</span>
              <div id="player-messages">
                <div className="event"><span className="player-event">Linus</span> scored 377</div>
                <div className="event"><span className="player-event">Linus</span> started a new game</div>
                <div className="event"><span className="system-event">game</span> connected</div>
              </div>
            </div>
        </aside>
        <section className="col-md-10">
          <div className="text-center"> 
            <h2>Temple #<span id="temple-number">2</span>: <span id="temple-name">Salt Lake Temple</span></h2>
          </div>
          <div className="map-container">
            <div className="score-box">
              <label for="score">Score</label>
              <input type="number" id="score" value="0" readonly className="form-control" />
            </div>
            <div className="guess-error-box">
              <label for="count">Guess Error:</label>
              <input type="number" id="count" value="0" readonly className="form-control" />
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Simple_world_map.svg" alt="World Map" />
          </div>
        </section>
      </div>
    </main>
  );
}