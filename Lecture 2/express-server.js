const express = require('express');

// make the server/app by calling express 
const app = express();

// attach the incoming request's body or sent data to the request's body property
app.use(express.json());

// dummy users array
const users = [
  { name: 'john', id: '1' },
  { name: 'ali', id: '2' },
  { name: 'umar', id: '3' },
];

// CRUD
// C -> Create
// R -> Read
// U -> Update
// D -> Delete

// send list of all users if a GET request is received for "/api/users"
app.get('/api/users', (req, res) => {
  return res.json({ users });
});

// add a new user to the users array if a POST request is received for "/api/users"
app.post('/api/users', (req, res) => {
  users.push(req.body);
  res.json({ user: req.body });
});

// send a single user if a GET request is received for "/api/users/:id" where :id represents a placeholder for user's id 
app.get('/api/users/:id', (req, res) => {
  const { id: paramId } = req.params;
  const user = users.find(user => user.id === paramId);
  if (!user) {
    return res.status(404).json({ error: 'requested user not found' });
  }
  res.json({ user: userToUpdate });
});

// run the server on port 3000, and log that it is running whenever server starts
app.listen(3000, () => {
  console.log('Server is running...');
});
