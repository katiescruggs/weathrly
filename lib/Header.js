import React from 'react';
import Search from './Search.js';
import './Header.scss';

export default function Header(props) {
  return (
    <div>
      <h1>Weather for </h1>
      <Search locationClick={props.locationClick}/>
    </div>

  )
}