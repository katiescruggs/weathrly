import React from 'react';
import Search from './Search.js';
import PropTypes from 'prop-types';
import './Header.scss';

export default function Header(props) {
  return (
    <div className="header">
      <h1>Weather for </h1>
      <Search locationClick={props.locationClick}/>
    </div>
  );
}

Header.propTypes = {
  locationClick: PropTypes.func
};