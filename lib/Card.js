import React from 'react';
import './Card.scss';

export default function Card(props) {
  return (
    <div className="card">
      <h3>{props.time}</h3>
        <img src={props.icon} />
        <p>
          {props.temp.map((temp, index) => <span key={index}>{temp}&deg;F</span>)}
        </p>
    </div>
  )
}