// Two ways to import & export a file, one using commonjs (older method) and one using ES6 import/export syntax

// Method 1
// import using require
const fs = require('fs');
const someVarialbe = 'Hello World';
// export using module exports
module.exports = someVarialbe;

// Method 2
// import using import keyword
import fs from 'fs';
// export using export keyword
export default someVarialbe;
