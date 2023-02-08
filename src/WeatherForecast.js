import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [live, setLive] = useState(false);
  let [forecast, setForecast] = useState(null);

  function getForecast(response) {
    setForecast(response.data.daily);
    setLive(true);
  }

  if (live) {
    return (
      <div className="col-4 forecat">
        <ForecastDay data={forecast} />
      </div>
    );
  } else {
    let key = "b40b135798f82a05aed08769f9275f50";
    let la = props.coordinates.lat;
    let lo = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${la}&lon=${lo}&units=metric&appid=${key}`;

    axios.get(apiUrl).then(getForecast);

    return "Nya...";
  }
}
