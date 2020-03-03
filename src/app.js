function displayTemperarture(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].description;
  console.log(response.data.weather[0].description);
}

let apiKey = "ab89347cacce1a19cd08ea5cb4878ce1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperarture);
