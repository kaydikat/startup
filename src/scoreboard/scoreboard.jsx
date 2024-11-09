import React from 'react';
import './scoreboard.css';

export function Scoreboard() {
  return (
    <main className="container-fluid text-center">
      <div>
        <h3>Your score today: <span id="score"></span>2000</h3>
      </div>
      <section className="scoreboard">
        <header className="text-center">
          <h2>Scoreboard</h2>
        </header>
        <table className="table table-striped-columns">
          <thead className="table-dark">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>kdg</td>
              <td>5000</td>
              <td>May 20, 2021</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Annie James</td>
              <td>1350</td>
              <td>June 2, 2021</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Gunter Spears</td>
              <td>1200</td>
              <td>July 3, 2020</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}