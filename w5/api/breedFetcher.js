const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (error, response, body) => {
  if (error) throw error;
  if (body[1] === ']') console.log('Breed not found');
  else console.log(JSON.parse(body));
});