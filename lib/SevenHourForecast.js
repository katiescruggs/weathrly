import React from 'react';
import Card from './Card.js';

export default function SevenHourForecast(props) {
  {}

  return ( 
    <div>
      7 Hour Forecast
      {props.array.map((hour, index) => <Card key={index} hour={hour.hour} icon={hour.icon} temp={hour.tempF} />)}
    </div>
  )
}