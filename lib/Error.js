import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search.js';
import './styles/Error.scss';

export default function Error(props) {
  return (
    <div className="error-page">
      <h1>Error</h1>
      <Search locationClick={props.locationClick}/>
      <p className="error-message">
        Please enter a valid City, ST or Zip Code.
      </p>
    </div>
  );
}

Error.propTypes = {
  locationClick: PropTypes.func
};