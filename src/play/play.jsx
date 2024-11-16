import React from 'react';
import './play.css';

import { Players } from './players';
import { MapGame } from './mapGame';
import { MyLocation } from './myLocation';

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

            <MapGame userName={props.userName} />
          </div>
        </section>
      </div>
    </main>
  );
}