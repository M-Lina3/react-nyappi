import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function WeatherSearch() {
  return (
    <div className="lebox">
      <div className="row mt-2 justify-content-center">
        <div className="col"></div>
      </div>
      *insert search bar*<button className="elbutton ms-2">🌟</button>

      <div className="row mt-3 ms-1">
        <div className="col-8">
          <div className="eldate">January 23, 2023 3:33</div>
          <div className="city">Atlanta</div>
          <div className="country">US</div>
          <div className="maintemp">
            57&nbsp;
            <span className="smol">
              <span>°F</span> | <span>°C</span>
            </span>
          </div>
          <div className="feels">Feels Like: 48°</div>
          <div className="highlow">50°/70°</div>
          <br></br>
          <div>🔆</div>
          <div>Fog</div>
          <div>Wind: 3 mph</div>
          <div>Humidity: 0%</div>
        </div>

        <div className="col-4 forecat">
          <div className="row pb-2 ms-1">
            <div>Monday</div>
            <div>🌤</div>
            <div>33°/33°</div>
          </div>
          <div className="row pb-2 ms-1">
            <div>Tuesday</div>
            <div>🌤</div>
            <div>33°/33°</div>
          </div>
          <div className="row pb-2 ms-1">
            <div>Wednesday</div>
            <div>🌤</div>
            <div>33°/33°</div>
          </div>
          <div className="row pb-2 ms-1">
            <div>Thursday</div>
            <div>🌤</div>
            <div>33°/33°</div>
          </div>
          <div className="row pb-2 ms-1">
            <div>Friday</div>
            <div>🌤</div>
            <div>33°/33°</div>
          </div>
        </div>
      </div>
    </div>
  );

  /*
  **search bar**
   <form className="laform">
            <input type="search" placeholder="Enter a city..." />
            <input type="Submit" value="Search" className="elbutton ms-1" />
            <button className="elbutton ms-2">🌟</button>
          </form>


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
      <div>
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
        </div>
      </div>
    );
  } else {
    return form;
  }*/
}
