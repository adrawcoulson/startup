const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://audrac99:Pixie2pen@cluster0.kyz7zgp.mongodb.net/bnb`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const deviceCollection = db.collection('device');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
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

async function addDevice(device) {
  const result = await deviceCollection.insertOne(device);
  return result;
}

function getDevices() {
  //const query = {device};
  const cursor = deviceCollection.find({});
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addDevice,
  getDevices,
};
//when I want cookies to be sent back. 