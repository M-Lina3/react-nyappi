import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function WeatherSearch(props) {
  const [weather, setWeather] = useState({ live: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeather({
      coordinates: response.data.coord,
      live: true,
      date: new Date(response.data.dt * 1000),
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      feels: Math.round(response.data.main.feels_like),
      min: Math.round(response.data.main.temp_min),
      max: Math.round(response.data.main.temp_max),
      wind: response.data.wind.speed,
      name: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      //`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function search() {
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function searchCity(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  if (weather.live) {
    return (
      <div className="lebox">
        <div className="row mt-2 justify-content-center">
          <div className="col"></div>
        </div>

        <form className="laform" onSubmit={searchCity}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="searchbar"
            onChange={cityChange}
          />
          <input type="Submit" value="Search" className="elbutton ms-1" />
          <button className="elbutton ms-2">🌟</button>
        </form>
        <WeatherData data={weather} />
      </div>
    );
  } else {
    search();
    return "Nyaaa...";
  }
}
