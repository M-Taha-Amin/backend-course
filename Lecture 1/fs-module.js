const fs = require('fs');
const path = require('path');

// SYNC WAY OF USING FS MODULE
// make a file
fs.writeFileSync(filePath, '');

// read data from a file
const data = fs.readFileSync('./test.js', 'utf-8');

// check if a file exists
const fileExists = fs.existsSync('./data.txt');

// update an existing file
fs.appendFileSync('./data.txt', '\nnew data using append method', 'utf-8');

// ASYNC WAY OF USING FS MODULE
const filePath = path.join(__dirname, 'asyncfile.txt');

// how to create a file
// Takes four arguements, the path of the file to be created, its content, encoding and a callback function
fs.writeFile(filePath, '', 'utf-8', function (error) {
  if (error) {
    console.log(error);
  }
});

// how to read file
// Takes three arguements, the path of the file to be created, encoding and a callback function which will return the retrieved data
fs.readFile(filePath, 'utf-8', function (error, data) {
  if (error) {
    console.log(error);
  }
  console.log(data);
});

// how to append content async
// Takes four arguements, the path of the file to be created, new data to be added, encoding and a callback function
fs.appendFile(filePath, '\nasyncly added data', 'utf-8', function (error) {
  if (error) {
    console.log(error);
  }
});
