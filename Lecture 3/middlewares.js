const express = require('express');

const app = express();

// middleware function which will receive the request and log and must call next to pass the control to next function in the chain
app.use((req, res, next) => {
  console.log('message from middleware 1');
  next();
});

// middleware function which will receive the request and log and must call next to pass the control to next function in the chain
app.use((req, res, next) => {
  console.log('message from middleware 2');
  next();
});

// Simple route for / which just sends Hello world
app.get('/', (req, res) => {
  res.json({ message: 'Hello world' });
});

// middleware function which will receive the request and log and must call next to pass the control to next function in the chain
app.use((req, res, next) => {
  console.log('message from middleware 3');
  next();
});

// error handling middleware function which will receive four arguements and return the error as response with status code 400
app.use((error, req, res, next) => {
  console.log('error', error);
  return res.status(400).json({ error: error });
});

app.listen(3000, () => {
  console.log('server is running...');
});
