import React from 'react';
import './play.css';

import { Players } from './players';
import { RandomTemple } from './templeRandomizer';
import { MapGame } from './mapGame';

export function Play(props) {
  return (
    <main className="container-fluid">
      <div className="row">
        <aside className="col-md-2 sidebar">
            <div className="players">
              <Players userName={props.userName} />
            </div>
        </aside>
        <section className="col-md-10">
          <div className="text-center"> 
            <RandomTemple />
            <MapGame />
          </div>
          {/* <div className="map-container">
            <div className="score-box">
              <label for="score">Score</label>
              <input type="number" id="score" value="0" readonly className="form-control" />
            </div>
            <div className="guess-error-box">
              <label for="count">Guess Error</label>
              <input type="number" id="count" value="0" readonly className="form-control" />
            </div>
            <img src="world_map.png" alt="World Map" />
          </div> */}
        </section>
      </div>
    </main>
  );
}