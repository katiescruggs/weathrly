import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';
import './TenDayForecast.scss';

export default function TenDayForecast(props) {
  return (
    <div className="ten-day-forecast">
      <h2>10 DAY FORECAST</h2>
      <div className="ten-card-holder">
        {props.array.map((day, index) => 
          <Card key={index} 
                time={day.day} 
                icon={day.icon} 
                temp={[day.highF, day.lowF]} />
        )}
      </div>
    </div>
  );
}

TenDayForecast.propTypes = {
  array: PropTypes.array,
  ['array.map']: PropTypes.func
};