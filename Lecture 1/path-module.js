const path = require('path');

// PATH MODULE
// Joins all arguments with a slash, will result in: /home/desktop/user/file
const path = path.join('home', 'desktop', 'user', 'file');

// To get path to current folder, use __dirname
const currentFolder = __dirname;

// To get path to current file, use __filename
const currentFile = __filename;

// To join path using dirname
// It will take the current folder name and add the notes.txt at the end with a slash
const pathWithDirname = path.join(__dirname, 'notes.txt');
