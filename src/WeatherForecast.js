import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function WeatherForecast() {
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
