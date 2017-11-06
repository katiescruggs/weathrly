import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search.js';
import './styles/Welcome.scss';

export default function Welcome(props) {
  return (
    <div className = "welcome-screen">
      <h1>Welcome to Weathrly</h1>
      <Search locationClick={props.locationClick} />
    </div>
  );
}

Welcome.propTypes = {
  locationClick: PropTypes.func
};