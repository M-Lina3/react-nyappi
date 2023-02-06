import React from "react";
import "./App.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherData(props) {
  return (
    <div>
      <div className="row mt-3 ms-1">
        <div className="col-8">
          <div className="eldate">
            <FormattedDate date={props.data.date} />
          </div>
          <div className="city">{props.data.name}</div>
          <div className="country">US</div>
          <div className="maintemp">
            <WeatherTemp celsius={props.data.temperature}/>
            
          </div>
          <div className="feels">Feels Like: {props.data.feels}°</div>
          <div className="highlow">
            {props.data.min}°/{props.data.max}°
          </div>
          <div className="mt-3">
            <WeatherIcon code={props.data.icon} />
           
          </div>
          <div className="text-capitalize">{props.data.description}</div>
          <div>Wind: {props.data.wind} m/sec</div>
          <div>Humidity: {props.data.humidity}%</div>
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
}
