import React from 'react';

let d = new Date();
let time = d.getHours() + ':' + d.getMinutes();

export default function CurrentWeather(props) {
  return (
    <div className="current-weather-div">
      <h1>Weather for {props.location}</h1>

      <div className="current-parent-div">
        <div className="currently-div">
          <h3>Now {time}</h3>
          <div className="current-img-temp">
            <img src={props.icon}/>
            <p className="current-temp">{props.temp}&deg;F</p>
          </div>
          <p>{props.conditions}</p>
        </div>

        <div className="today">
          <h3>{props.day}, {props.month} {props.date}</h3>
          <p className="high-low"> {props.high}&deg;F / {props.low}&deg;F</p>
          <p className="summary">{props.summary}</p>
        </div>
      </div>
    </div>
  );
}