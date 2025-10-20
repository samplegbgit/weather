const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherDiv = document.getElementById("weather");

function fetchWeather(city) {
  fetch(`https://wttr.in/${city}?format=%C+%t`)
    .then(res => res.text())
    .then(data => {
      weatherDiv.textContent = `${city}: ${data}`;
      localStorage.setItem("lastCity", city);
    })
    .catch(() => {
      weatherDiv.textContent = "City not found!";
    });
}

searchBtn.onclick = () => {
  if (cityInput.value) {
    fetchWeather(cityInput.value);
  }
};

const lastCity = localStorage.getItem("lastCity");
if (lastCity) {
  fetchWeather(lastCity);
}
