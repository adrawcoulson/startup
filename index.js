const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the application is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the applications static content
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/devices', async (_req, res) => {
  const devices = await DB.getDevices();
  res.send(devices);
});

// SubmitScore
apiRouter.post('/device', async (req, res) => {
  DB.addDevice(req.body);
  const devices = await DB.getDevices();
  res.send(devices);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', {root: 'public'});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});







// const express = require('express');
// const app = express();
// const DB = require('./database.js');


// // The service port. In production the front-end code is statically hosted by the service on the same port.
// const port = process.argv.length > 2 ? process.argv[2] : 4000;

// // JSON body parsing using built-in middleware
// app.use(express.json());

// // Serve up the front-end static content hosting
// app.use(express.static('public'));

// // Router for service endpoints
// var apiRouter = express.Router();
// app.use(`/api`, apiRouter);

// // GetScores
// apiRouter.get('/devices', async(_req, res) => {
//   const devices = await DB.getDevices();
//   res.send(devices);
// });

// // SubmitScore
// apiRouter.post('/device', async (req, res) => {
//   console.log("INSIDE POST");
//   DB.addDevice(req.body);
//   const devices = await DB.getDevices();
//   res.send(devices);
// });

// // Return the application's default page if the path is unknown
// app.use((_req, res) => {
//   res.sendFile('index.html', { root: 'public' });
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
