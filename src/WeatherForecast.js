import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [live, setLive] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLive(false);
  }, [props.coordinates]);

  function getForecast(response) {
    setForecast(response.data.daily);
    setLive(true);
  }

  if (live) {
    return (
      <div className="col-4 forcat">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div key={index}>
                <ForecastDay data={dailyForecast} />{" "}
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let key = "bc2cd97eaa209e7d22d8f3c84081655f";
    let la = props.coordinates.lat;
    let lo = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${la}&lon=${lo}&units=${props.unit}&appid=${key}`;

    axios.get(apiUrl).then(getForecast);

    return "Nya...";
  }
}
