const { mkdirSync } = require('fs');
const url = require('url');
const myUrl = new URL('http://mywebsite.com/hell.html?id=100&status=active');

// Get serialize URL

console.log(myUrl.href);
console.log(myUrl.toString);
// Get toString
console.log(myUrl.host);

// Host ( root domain does not get post )
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialised query 
console.log(myUrl.search);

// Params object 
console.log(myUrl.searchParams);

// Add paramters in url 
myUrl.searchParams.append('abc','123');

// Params object 
console.log(myUrl.searchParams);

// Loop through all the parameters
myUrl.searchParams.forEach((value,name)=>console.log(`${name} : ${$value}`));