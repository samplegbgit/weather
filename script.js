const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherDiv = document.getElementById("weather");

searchBtn.onclick = () => {
  const city = cityInput.value;
  if (!city) return;
  fetch(`https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true`)
    .then(res => res.json())
    .then(data => {
      weatherDiv.textContent = `Weather: ${data.current_weather.temperature}°C`;
    })
    .catch(() => {
      weatherDiv.textContent = "City not found!";
    });
};
