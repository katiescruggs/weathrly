import React from 'react';
import PropTypes from 'prop-types';

export default function CurrentWeather(props) {
  return (
    <div className="current-weather-div">
      <div className="currently-div">
        <h3 className="current-title">Denver, CO</h3>
        <div className="current-img-temp">
          <img src={props.icon}/>
          <p className="current-temp">{props.temp}&deg;F</p>
        </div>
          <p className="current-conditions">
            Current Conditions: {props.conditions}
          </p>
      </div>
        <div className="today-div">
          <h3 className="today-title">
            {props.day}, {props.month} {props.date}
          </h3>
          <p className="high-low">{props.high}&deg;F / {props.low}&deg;F</p>
          <p className="summary">Today's Outlook: {props.summary}</p>
        </div>
    </div>
  );
}

CurrentWeather.propTypes = {
  icon: PropTypes.string,
  temp: PropTypes.string,
  conditions: PropTypes.string,
  day: PropTypes.string,
  month: PropTypes.string,
  date: PropTypes.string,
  high: PropTypes.string,
  low: PropTypes.string,
  summary: PropTypes.string
};