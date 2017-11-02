import React from 'react';
import Card from './Card.js';
import './TenDayForecast.scss';

export default function TenDayForecast(props) {
  return (
    <div>
      <h2>10 Day Forecast</h2>
      <div className="ten-card-holder">
        {props.array.map((day, index) => <Card key={index} time={day.day} icon={day.icon} temp={[day.highF, day.lowF]} />)}
      </div>
    </div>
  )
}