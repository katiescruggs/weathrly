import React from 'react';

export default function CurrentWeather(props) {
  return (
    <div className="current-weather-div">
      <div className="current-parent-div">
        <div className="currently-div">
          <h3 className="current-title">Now</h3>
          <div className="current-img-temp">
            <img src={props.icon}/>
            <p className="current-temp">{props.temp}&deg;F</p>
          </div>
          <p className="current-conditions">{props.conditions}</p>
        </div>

        <div className="today">
          <h3 className="today-title">{props.day}, {props.month} {props.date}</h3>
          <p className="high-low">{props.high}&deg;F / {props.low}&deg;F</p>
          <p className="summary">{props.summary}</p>
        </div>
      </div>
    </div>
  );
}