const http = require('http');
const fs = require('fs');
const path = require('path');

// http server using the built-in http module in nodejs
const server = http.createServer();

// event listener listening for requests on server 
server.on('request', function (request, response) {

  // take url out from the request object
  const { url } = request;

  // if url is "/" or no url after localhost:<PORT_NUMBER>, send index html file  
  if (url === '/') {
    const indexFilePath = path.join(__dirname, 'frontend', 'index.html');
    const indexHtml = fs.readFileSync(indexFilePath, 'utf8');
    response.end(indexHtml);
  } 

  // if url is "/about" or url after localhost:<PORT_NUMBER> is "/about", send about html file  
  else if (url === '/about') {
    const aboutFilePath = path.join(__dirname, 'frontend', 'about.html');
    const aboutHtml = fs.readFileSync(aboutFilePath, 'utf8');
    response.end(aboutHtml);
  } 
  
  // if a request is recieved for a css file, send it from the frontend folder
  else if (url === '/style.css') {
    response.writeHead(200, {
      'content-type': 'text/css',
    });
    const cssFilePath = path.join(__dirname, 'frontend', 'style.css');
    const cssFile = fs.readFileSync(cssFilePath, 'utf8');
    response.end(cssFile);
  }

  // if a unknown request is recieved, send Page not found
  else {
    response.end("<h1>Page not found</h1>")
  }
});

// run the server on port 3000, and log that it is running whenever server starts
server.listen(3000, () => {
  console.log('Server is running on PORT 3000...');
});
