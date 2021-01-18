let api2 = `https://restcountries.eu/rest/v2/currency/USD`;

fetch(api2)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((item) => console.log("USD using Counties:" + item.name));
  });
