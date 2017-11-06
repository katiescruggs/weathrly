import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search.js';

export default function Error(props) {
  return (
    <div className="error-page">
      <h1>Error</h1>
      <Search locationClick={props.locationClick}/>
    </div>
  );
}

Error.propTypes = {
  locationClick: PropTypes.func
};