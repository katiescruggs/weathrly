import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';
import './SevenHourForecast.scss';

export default function SevenHourForecast(props) {
  return ( 
    <div className="seven-hour">
      <h2>LATER TODAY</h2>
      <div className="seven-card-holder">
        {props.array.map((hour, index) => 
          <Card key={index} 
                time={hour.hour} 
                icon={hour.icon} 
                temp={[hour.tempF]} />
        )}
      </div>
    </div>
  );
}

SevenHourForecast.propTypes = {
  array: PropTypes.array,
  ['array.map']: PropTypes.func
};