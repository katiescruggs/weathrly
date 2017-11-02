import React from 'react';
import Search from './Search.js';

export default function Header(props) {
  return (
    <div>
      <p>I'm a header</p>
      <Search locationClick={props.locationClick}/>
    </div>

  )
}