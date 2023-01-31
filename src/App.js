import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Nyappi</h1>
        <WeatherSearch defaultCity="Atlanta" />
        <footer>
          <a
            href="https://github.com/M-Lina3/react-nyappi"
            target="_blank"
            rel="noreferrer"
          >
            Open source Code 🐈
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
