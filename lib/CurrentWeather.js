import React from 'react';
import PropTypes from 'prop-types';
import './CurrentWeather.css';

export default function CurrentWeather(props) {
  return (
    <div className="current-weather-div">
      <div className="currently-div">
        <h3 className="current-title">{props.location}</h3>
        <h4 className="today-title">
          {props.day}, {props.month} {props.date}
        </h4>
        <div className="current-img-temp">
          <img src={props.icon}/>
          <p className="current-temp">{props.temp}&deg;</p>
        </div>
          <p className="current-conditions">
            Currently: {props.conditions}
          </p>
      </div>
        <div className="today-div">
        <h4>Today's Weather</h4>
          <p className="high-low">
            {props.high}&deg;<span>/ {props.low}&deg;</span>
          </p>
          <p className="summary">{props.summary}</p>
        </div>
    </div>
  );
}

CurrentWeather.propTypes = {
  location: PropTypes.string,
  icon: PropTypes.string,
  temp: PropTypes.number,
  conditions: PropTypes.string,
  day: PropTypes.string,
  month: PropTypes.string,
  date: PropTypes.number,
  high: PropTypes.string,
  low: PropTypes.string,
  summary: PropTypes.string
};