
const newArgv = process.argv.slice(2);
const breedName = newArgv[0];

const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) console.log(Error);

  console.log(reqData(body));
});

const reqData = (body) => {
  if (body === "[]") {
    return "Breed not found.";
  }
  const data = JSON.parse(body);

  if (breedName !== data[0]["name"]) return "Breed not found.";

  if (data.message) return "Incorrect url.";

  return (data[0]["description"]);
};
