import React from 'react';
import Search from './Search.js';

export default function Error(props) {
  return (
    <div className="error-page">
      <h1>Error</h1>
      <Search locationClick={props.locationClick}/>
    </div>
  )
}
