const express = require('express');

// make the server/app by calling express
const app = express();

// attach the incoming request's body or sent data to the request's body property
app.use(express.json());

// dummy users array
let users = [
  { name: 'john', id: '1' },
  { name: 'ali', id: '2' },
  { name: 'umar', id: '3' },
];

// delete a user from the users array if a DELETE request is received for "/api/users/:id" here id is a route param
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== id);
  res.json({ message: 'User Deleted Successfully' });
});

// update a user from the users array if a PUT request is received for "/api/users/:id" here id is a route param, and we will recieve the data to update from the request body
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { newName } = req.body;
  // VALIDATION
  // Before updating we can check if the required fields are provided or not
  if (!newName || !id) {
    return res
      .status(400)
      .json({ message: 'Invalid request, Required fields are missing' });
  }
  const userToUpdate = users.find(user => user.id === id);
  userToUpdate.name = newName;
  res.json({ user: userToUpdate });
});

// run the server on port 3000, and log that it is running whenever server starts
app.listen(3000, () => {
  console.log('Server is running...');
});
