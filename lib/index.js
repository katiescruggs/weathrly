import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import apiKey from './key.js';

const currentConditionsAPI = 'http://api.wunderground.com/api/' + apiKey + '/conditions/q/CO/Denver.json';
const sevenHourForecastAPI = 'http://api.wunderground.com/api/' + apiKey + '/hourly/q/CO/Denver.json'
const tenDayForecastAPI = 'http://api.wunderground.com/api/' + apiKey + '/forecast10day/q/CO/Denver.json';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

$.getJSON(currentConditionsAPI, data => {
  //console.log(data);
  console.log('CURRENT CONDITIONS:')
  console.log('current day: ' + days[(new Date()).getDay()]);
  console.log('current location: ' + data.current_observation.display_location.full);
  console.log('current temp (F): ' + data.current_observation.temp_f);
  console.log('current temp(C): ' + data.current_observation.temp_c);
  console.log('current conditions: ' + data.current_observation.weather);
  console.log('icon of current conditions: ' + data.current_observation.icon_url);
});

$.getJSON(sevenHourForecastAPI, data => {
  console.log(' ');
  console.log('SEVEN HOUR FORECAST');
  //console.log(data);

  for(let i = 0; i < 7; i++) {
    console.log('Hour: ' + data.hourly_forecast[i].FCTTIME.hour);
    console.log('Icon: ' + data.hourly_forecast[i].icon_url);
    console.log('Temp (F): ' + data.hourly_forecast[i].temp.english);
    console.log('Temp (C): ' + data.hourly_forecast[i].temp.metric);
    console.log('-------------');
  }
});

$.getJSON(tenDayForecastAPI, data => {
  // console.log(data);
  let dayIndex = new Date().getDay();
  console.log(' ');
  console.log('10 DAY FORECAST:');
  for(let i = 0; i < data.forecast.simpleforecast.forecastday.length; i ++) {
    dayIndex++;
    if(dayIndex > 6) {
      dayIndex = dayIndex % 7;
    }
    console.log('day: ' + days[dayIndex]);
    console.log('icon: ' + data.forecast.simpleforecast.forecastday[i].icon_url);
    console.log('high (f): ' + data.forecast.simpleforecast.forecastday[i].high.fahrenheit);
    console.log('high (c): ' + data.forecast.simpleforecast.forecastday[i].high.celsius);
    console.log('low (f): ' + data.forecast.simpleforecast.forecastday[i].low.fahrenheit);
    console.log('low (c): ' + data.forecast.simpleforecast.forecastday[i].low.celsius);
    console.log('-----------------------');

    // console.log('high: ' + data.forecast.txt_forecast.forecastday[i].title);

  }
  console.log('')
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
