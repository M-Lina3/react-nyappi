import React from "react";
import "./App.css";

export default function WeatherTemp(props) {
  function convertToF(event) {
    event.preventDefault();
    props.setUnit("imperial");
  }
  function convertToC(event) {
    event.preventDefault();
    props.setUnit("metric");
  }
  return (
    <div>
      {props.temperature}&nbsp;
      <span className="smol">
        {props.unit === "metric" ? (
          <span>
            <span>°C</span> |
            <span>
              <a href="/" onClick={convertToF}>
                °F
              </a>
            </span>
          </span>
        ) : (
          <span>
            <span>
              <a href="/" onClick={convertToC}>
                °C
              </a>
            </span>
            |<span>°F</span>
          </span>
        )}
      </span>
    </div>
  );
}
