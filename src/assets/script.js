const city = document.getElementById('city-input');
const flag = document.getElementById('flag');

const showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
};

const searchCity = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=041bdb08f99ad260bdd5511705a2741c&units=metric`);
        const data = await response.json();
        showWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};
