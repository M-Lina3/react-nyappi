import React from "react";
import "./App.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import WeatherForecast from "./WeatherForecast";

export default function WeatherData(props) {
  return (
    <div>
      <div className="row mt-3 ms-1">
        <div className="col-8">
          <div className="eldate">
            <FormattedDate date={props.data.date} />
          </div>
          <div className="city">{props.data.name}</div>
          <div className="country">{props.data.country}</div>
          <div className="maintemp">
            <WeatherTemp temperature={props.data.temperature} unit={props.unit} setUnit={props.setUnit}/>
          </div>
          <div className="feels">Feels Like: {props.data.feels}°</div>
          <div className="highlow">
            {props.data.min}°/{props.data.max}°
          </div>
          <div className="mt-3"></div>
          <WeatherIcon code={props.data.icon} size={80} />
          <div className="text-capitalize">{props.data.description}</div>
          <div>Wind: {props.data.wind} {props.unit === "metric" ? <span>m/sec</span> : <span>mi/hr</span>}</div>
          <div>Humidity: {props.data.humidity}%</div>
        </div>
        <WeatherForecast coordinates={props.data.coordinates} unit={props.unit}/>
      </div>
    </div>
  );
}

