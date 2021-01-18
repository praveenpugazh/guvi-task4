let api = "https://restcountries.eu/rest/v2/all";
console.log("loaded");
let sum = 0;

//Get all the countries from Asia continent / “region” using Filter function

fetch(api).then((response) => {
  return response.json();
});

console.log("countires pop less");
// Print the following details name, capital, flag using forEach function.

data.forEach((item) => {
  console.log(
    `Country: ${item.name}, Capital: ${item.capital}, flag: ${item.flag}`
  );
});
