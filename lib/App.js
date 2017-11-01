import React from 'react';
import CurrentWeather from './CurrentWeather.js';
import SevenHourForecast from './SevenHourForecast.js';
import TenDayForecast from './TenDayForecast.js';
import fetchApi from './fetchApi.js';
//import sampleApiData from './sampleApiData.js';

export default function App() {
  const weatherData = fetchApi();
  console.log(weatherData);
  return (
    <div>
      <CurrentWeather data={weatherData.currentWeather} />
      <SevenHourForecast data={weatherData.sevenHour}/>
      <TenDayForecast data={weatherData.tenDay}/>
    </div>

  );
}