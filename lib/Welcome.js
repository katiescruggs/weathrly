import React from 'react';
import Search from './Search.js';
import './styles/Welcome.scss';

export default function Welcome(props) {
  return (
    <div className = "welcome-screen">
      <h1>Welcome to Weathrly</h1>
      <Search locationClick={props.locationClick} />
    </div>
  )

}