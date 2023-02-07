import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function WeatherForecast() {
  /* let key = "8c48afa47a9a9c24f3500c7039d50aaa"
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=14.14&lon=10.1&appid=${key}`;
  */
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
