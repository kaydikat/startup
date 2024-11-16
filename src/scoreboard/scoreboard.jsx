import React from 'react';
import './scoreboard.css';

export function Scoreboard() {
  const [scores, setScores] = React.useState([]);

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.

  React.useEffect(() => {
    fetch('/api/scores')
      .then((response) => response.json())
      .then((scores) => {
        setScores(scores);
      });
  }, []);

  // Demonstrates rendering an array with React
  const scoreRows = [];
  if (scores && scores.length > 0) {
    scores.forEach((score, i) => {
      scoreRows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{score.name ? score.name.split('@')[0] : 'Unknown'}</td>
          <td>{score.score || 0}</td>
          <td>{score.date || 'Unknown'}</td>
        </tr>
      );
    });
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