const express = require('express');

const app = express();

// ROUTE PARAM
// Here, :id represents a route param. Route params needs to defined beforehand that how many route params we will be receiving We can get its value by request.params property
// like so
app.get('/users/:id', (request, response) => {
  const { id } = request.params;
  return response.json({ id: id });
});

// QUERY PARAM
// We do not define the amount of query params, user can send as many query params as they want. We can access them using request.query property like so
app.get('/posts', (request, response) => {
  // Shows we can have a very large number of query params
  const { queryParam1, queryParam2, ...remainingParams } = request.query;
});

app.listen(3000, () => {
  console.log('server is running...');
});
