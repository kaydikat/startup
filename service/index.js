const express = require('express');
const uuid = require('uuid');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

// create the memory data structures
let users = {};
let scores = [];

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
      users[user.email] = user;
  
      res.send({ token: user.token });
    }
  });
  
  // GetAuth login an existing user
  apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
      if (req.body.password === user.password) {
        user.token = uuid.v4();
        res.send({ token: user.token });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
  });
  
  // DeleteAuth logout a user
  apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
      delete user.token;
    }
    res.status(204).end();
  });
  
  // GetScores
  apiRouter.get('/scores', (_req, res) => {
    res.send(scores);
  });
  
  // this can be anything; you can get stuff from database
  var testdata = {test:"testdata"};
  apiRouter.get('/test', (_req, res) => {
    console.log("In Test");
    res.send(testdata);
  })
  // SubmitScore
  apiRouter.post('/score', (req, res) => {
    scores = updateScores(req.body, scores);
    res.send(scores);
  });
  
  // Return the application's default page if the path is unknown
  app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
  // updateScores considers a new score for inclusion in the high scores.
  function updateScores(newScore, scores) {
    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore.score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }
  
    if (!found) {
      scores.push(newScore);
    }
  
    if (scores.length > 10) {
      scores.length = 10;
    }
  
    return scores;
  }

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});