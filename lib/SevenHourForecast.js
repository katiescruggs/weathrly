import React from 'react';
import Card from './Card.js';
import './SevenHourForecast.scss';

export default function SevenHourForecast(props) {
  {}

  return ( 
    <div className="seven-hour">
      <h2>7 Hour Forecast</h2>
      <div className="card-holder">
        {props.array.map((hour, index) => <Card key={index} time={hour.hour} icon={hour.icon} temp={[hour.tempF]} />)}
      </div>
    </div>
  )
}