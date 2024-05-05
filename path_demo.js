const { fstat } = require('fs');
const path = require('path');

// Base file name
// console.log(__filename); // It will show you the path with file name
// console.log(path.basename(__filename)); // This will only show you the base name which is path_demo.js

// Directory Name
// console.log(path.dirname(__filename));

// file Extension
// console.log(path.extname(__filename));

// Create path object
// console.log(path.parse(__filename));//
// Out put
// { root: '/',
//   dir: '/home/cedcoss/NodeCrashCourse/Day1/reference',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo' }
/**
 * We can access the object of parsed whther the extension or name or anythings we want.
 */

// Concatinate paths

// console.log(path.join(__dirname, 'test', 'hello.html') ); // /home/cedcoss/NodeCrashCourse/Day1/reference/test/hello.html

// Rename files
// fs.rename();
// console.log(fs.name());
console.log('Path Module');