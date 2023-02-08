import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data[0].dt);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div className="row pb-2 ms-1">
      <div>{day()}</div>
      <div className="forecaticon">
        <WeatherIcon code={props.data[0].weather[0].icon} size={30} />
      </div>
      <div>
        {Math.round(props.data[0].temp.max)}°/
        {Math.round(props.data[0].temp.min)}°
      </div>
    </div>
  );
}

/*

      max: Math.round(response.data.daily[0].temp.max),
      min: Math.round(response.data.daily[0].temp.min),
      day: response.data.daily[0].dt,
      icon: response.data.daily[0].weather[0].icon,
      */
