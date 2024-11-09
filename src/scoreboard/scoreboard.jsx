import React from 'react';
import './scoreboard.css';

export function Scoreboard() {
  const [scores, setScores] = React.useState([]);

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  React.useEffect(() => {
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      setScores(JSON.parse(scoresText));
    }
  }, []);

  // Demonstrates rendering an array with React
  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }
  return (
    <main className="container-fluid text-center">
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
          <tbody id='scores'>{scoreRows}</tbody>
        </table>
      </section>
    </main>
  );
}