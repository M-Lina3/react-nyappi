import React, { useState } from "react";
import axios from "axios";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function obtainWeather(event) {
    event.preventDefault();
    let apiKey = "0b6316953363b3ec3e7536039a47981b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={obtainWeather}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="Submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="card">
        {form}
        <div>
          <ul>
            <li>Temperature: {Math.round(weather.temperature)}℃</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind}m/sec</li>
            <li>Description: {weather.description}</li>
            <li>
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
          <a href="https://github.com/M-Lina3/react-nyappi">
            Open source Code 🐈
          </a>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
