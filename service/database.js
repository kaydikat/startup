// service/database.js

const { MongoClient, ServerApiVersion } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const password = encodeURIComponent(config.password);

const url = `mongodb+srv://${config.username}:${password}@${config.hostname}`;
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    tls: true, 
    serverSelectionTimeoutMS: 3000, 
    autoSelectFamily: false,
  }
});
const db = client.db('startup');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function getUser(email) {
    return userCollection.findOne({ email: email });
}


async function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addScore(score) {
  return scoreCollection.insertOne(score);
}

async function scoreboard() {
    return scoreCollection.find().sort({ score: -1 }).limit(10).toArray();
}

function getHighScores() {
  const query = { score: { $gt: 0, $lt: 900 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addScore,
  getHighScores,
};
