import React, { useState } from "react";
import "./App.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        {props.celsius}&nbsp;
        <span className="smol">
          <span>°C</span> |{" "}
          <span>
            <a href="/" onClick={convertToF}>
              °F
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div>
        {fahrenheit}&nbsp;
        <span className="smol">
          <span>
            <a href="/" onClick={convertToC}>
              °C
            </a>
          </span>{" "}
          | <span>°F</span>
        </span>
      </div>
    );
  }
}
