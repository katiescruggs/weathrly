import React from 'react';

export default function Card(props) {
  return (
    <div className="card">
      <h3>{props.hour}</h3>
      <img src={props.icon} />
      <p>{props.temp}&deg;F</p>
    </div>
  )
}