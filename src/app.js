function displayTemperarture(response) {
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature-value");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");

  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = arrangeDate(response.data.dt * 1000);
  console.log(response.data.dt * 1000);
}

function arrangeDate(timestamp) {
  let date = new Date(timestamp);
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[date.getDay()];
  console.log(day);
  return `${day} ${hour}:${minutes}h`;
}

let apiKey = "ab89347cacce1a19cd08ea5cb4878ce1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Viena&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperarture);
