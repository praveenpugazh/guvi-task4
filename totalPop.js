let api = "https://restcountries.eu/rest/v2/all";
console.log("loaded");
let sum = 0;

//Get all the countries from Asia continent / “region” using Filter function

fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let total_pop = data.reduce(
      (accumulator, currentValue) => accumulator + currentValue.population,
      0
    );
    console.log("total population:" + total_pop);
  });
