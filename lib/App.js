import React from 'react';
import CurrentWeather from './CurrentWeather.js';
import SevenHourForecast from './SevenHourForecast.js';
import TenDayForecast from './TenDayForecast.js';
import apiKey from './key.js';

const weatherApi = 'http://api.wunderground.com/api/' + apiKey + '/conditions/hourly/forecast10day/q/CO/Denver.json';
const cleanedData = {};

$.getJSON(weatherApi, data => {
  //console.log(data);
  
  cleanedData.currentWeather = {
    location: data.current_observation.display_location.full,
    condition: data.current_observation.weather,
    day: data.forecast.txt_forecast.forecastday[0].title,
    tempF: data.current_observation.temp_f,
    highF: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    lowF: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    summary: data.forecast.txt_forecast.forecastday[0].fcttext
  }
  cleanedData.sevenHour = [];
  for()


  cleanedData.tenDay = [];

  console.log(cleanedData);
});

// $.getJSON(sevenHourForecastAPI, data => {
//   console.log(' ');
//   console.log('SEVEN HOUR FORECAST');
//   //console.log(data);

//   for(let i = 0; i < 7; i++) {
//     console.log('Hour: ' + data.hourly_forecast[i].FCTTIME.hour);
//     console.log('Icon: ' + data.hourly_forecast[i].icon_url);
//     console.log('Temp (F): ' + data.hourly_forecast[i].temp.english);
//     console.log('Temp (C): ' + data.hourly_forecast[i].temp.metric);
//     console.log('-------------');
//   }
// });

// $.getJSON(tenDayForecastAPI, data => {
//   // console.log(data);
//   let dayIndex = new Date().getDay();
//   console.log(' ');
//   console.log('10 DAY FORECAST:');
//   for(let i = 0; i < data.forecast.simpleforecast.forecastday.length; i ++) {
//     dayIndex++;
//     if(dayIndex > 6) {
//       dayIndex = dayIndex % 7;
//     }
//     console.log('day: ' + days[dayIndex]);
//     console.log('icon: ' + data.forecast.simpleforecast.forecastday[i].icon_url);
//     console.log('high (f): ' + data.forecast.simpleforecast.forecastday[i].high.fahrenheit);
//     console.log('high (c): ' + data.forecast.simpleforecast.forecastday[i].high.celsius);
//     console.log('low (f): ' + data.forecast.simpleforecast.forecastday[i].low.fahrenheit);
//     console.log('low (c): ' + data.forecast.simpleforecast.forecastday[i].low.celsius);
//     console.log('-----------------------');

//     // console.log('high: ' + data.forecast.txt_forecast.forecastday[i].title);

//   }
//   console.log('')
// })











export default function App() {
  return (
    <div>
      <CurrentWeather />
      <SevenHourForecast />
      <TenDayForecast />
    </div>

  );
}