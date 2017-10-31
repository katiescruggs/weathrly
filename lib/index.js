import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import apiKey from './key.js';

const apiUrl = 'http://api.wunderground.com/api/' + apiKey + '/conditions/q/CA/San_Francisco.json';

$.getJSON(apiUrl, data => {
  console.log(data);
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
