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
  });
