const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://audrac99:Pixie2pen@cluster0.kyz7zgp.mongodb.net/bnb`;
const client = new MongoClient(url);
const db = client.db('startup');
const deviceCollection = db.collection('device');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addDevice(device) {
  const result = await deviceCollection.insertOne(device);
  return result;
}

function getDevices() {
//   const query = {device};
  const cursor = deviceCollection.find({});
  return cursor.toArray();
}

module.exports = { addDevice, getDevices };








// const { MongoClient } = require('mongodb');
// const config = require('./dbConfig.json');

// const url = `mongodb+srv://audrac99:Pixie2pen@cluster0.kyz7zgp.mongodb.net/bnb`;
// const client = new MongoClient(url);
// const db = client.db('startup');
// const deviceCollection = db.collection('device');

// // This will asynchronously test the connection and exit the process if it fails
// (async function testConnection() {
//   await client.connect();
//   await db.command({ ping: 1 });
// })().catch((ex) => {
//   console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//   process.exit(1);
// });

// async function addDevice(device) {
//   const result = await deviceCollection.insertOne(device);
//   return result;
// }

// function getDevices() {
//   const query = {device};
//   const cursor = scoreCollection.find(query);
//   return cursor.toArray();
// }

// module.exports = { addDevice, getDevices };