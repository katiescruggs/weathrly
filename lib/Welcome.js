import React from 'react';
import Search from './Search.js';

export default function Welcome(props) {
  return (
    <div>
      <h1>Welcome to Weathrly</h1>
      <Search locationClick={props.locationClick} />
    </div>
  )

}