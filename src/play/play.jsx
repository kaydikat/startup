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
            <MapGame />
          </div>
        </section>
      </div>
    </main>
  );
}