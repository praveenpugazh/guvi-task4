let api = "https://restcountries.eu/rest/v2/all";
console.log("loaded");
let sum = 0;

//Get all the countries from Asia continent / “region” using Filter function

fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let answer = data.filter((item) => item.region === "Asia");
    answer.forEach((element) => console.log(element.name));
    //Get all the countries with population of less than 2 lacs using Filter function.
    let population = data.filter((item) => item.population < 200000);
  });
