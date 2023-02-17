import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function WeatherSearch(props) {
  const [weather, setWeather] = useState({ live: false });
  const [cityInput, setCityInput] = useState(props.defaultCity);
  const [city, setCity] = useState(props.defaultCity);

  useEffect(() => {
    function search() {
      const apiKey = "bc2cd97eaa209e7d22d8f3c84081655f";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      axios.get(apiUrl).then((res) => {
        displayWeather(res);
      });
    }
    search();
  }, [city]);

  function displayWeather(response) {
    setWeather({ live: false });
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

  function searchCity(event) {
    event.preventDefault();
    setCity(cityInput);
  }

  function searchLocation(la, lo) {
    let key = "bc2cd97eaa209e7d22d8f3c84081655f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}8&units=metric&appid=${key}`;
    axios.get(apiUrl).then((res) => {
      setCity(res.data.name);
    });
  }

  function cityChange(event) {
    setCityInput(event.target.value);
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      let la = position.coords.latitude;
      let lo = position.coords.longitude;
      searchLocation(la, lo);
    });
  }

  return (
    <div className="lebox">
      <div className="row mt-2 justify-content-center gx-0">
        <div className="col-9 ps-0 pe-0">
          <form className="laform" onSubmit={searchCity}>
            <input
              type="search"
              placeholder="Enter a city..."
              className="searchbar"
              onChange={cityChange}
            />
            <input type="Submit" value="Search" className="elbutton ms-1" />
          </form>
        </div>
        <div className="col-3 ps-0 pe-0">
          <button className="elbutton" onClick={getCurrentLocation}>
            🌟
          </button>
        </div>
      </div>
      {weather.live ? <WeatherData data={weather} /> : null}
    </div>
  );
}
