import React from 'react';

export default function CurrentWeather(props) {
  return (
    <div>
      <h3>Current Weather</h3>
      <p> Location: {props.location} </p>
      <p> Conditions: {props.conditions} </p>
      <p> Temp: {props.temp} </p>

    </div>
  );
}