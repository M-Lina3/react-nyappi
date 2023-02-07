import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function getForecast(response) {
    console.log(response.data);
  }
  let key = "8c48afa47a9a9c24f3500c7039d50aaa";
  let la = props.coordinates.lat;
  let lo = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${la}&lon=${lo}&units=metric&appid=${key}`;

  axios.get(apiUrl).then(getForecast);
  return (
    <div className="col-4 forecat">
      <div className="row pb-2 ms-1">
        <div>Monday</div>
        <div className="forecaticon">
          <WeatherIcon code="11d" size={25} />
        </div>
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
  );
}
