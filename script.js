const apiKey = '7d8bf520f11501f9ca8f1d5c1fa09445';

const cityInput = document.getElementById('city-input');
const getWeatherBtn = document.getElementById('get-weather');

const cityNameEl = document.getElementById('city-name');
const tempEl = document.getElementById('temp');
const descriptionEl = document.getElementById('description');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const weatherResult = document.getElementById('weather-result');

getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (!city) return alert('Please enter a city name');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        alert(data.message);
        return;
      }

      cityNameEl.textContent = `Weather in ${data.name}, ${data.sys.country}`;
      tempEl.textContent = `🌡 Temperature: ${data.main.temp} °C`;
      descriptionEl.textContent = `📝 ${data.weather[0].description}`;
      humidityEl.textContent = `💧 Humidity: ${data.main.humidity}%`;
      windEl.textContent = `💨 Wind speed: ${data.wind.speed} m/s`;

      weatherResult.classList.remove('hidden');
    })
    .catch(err => {
      alert('Error fetching weather data');
      console.error(err);
    });
});
