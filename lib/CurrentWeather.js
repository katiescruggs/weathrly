import React from 'react';

export default function CurrentWeather(props) {
  return (
    <div className="current-weather-div">
      <h1>Weather for {props.location}</h1>
      <h2>{props.day} 3:30 p.m.</h2>

      <div className="current-parent-div">
        <div className="currently-div">
          <h3>Currently</h3>
          <p>{props.temp}&deg; F</p>
          <p>{props.conditions}</p>
        </div>

        <div className="high-low">
          <p>High: {props.high}&deg; F</p>
          <p>Low: {props.low}&deg; F</p>
        </div>
      </div>
      <p className="summary">{props.summary}</p>
    </div>
  );
}