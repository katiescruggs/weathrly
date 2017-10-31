import React from 'react';
import CurrentWeather from './CurrentWeather.js';
import SevenHourForecast from './SevenHourForecast.js';
import TenDayForecast from './TenDayForecast.js';
import fetchApi from './fetchApi.js';

export default function App() {
  console.log(fetchApi());
  return (
    <div>
      <CurrentWeather />
      <SevenHourForecast />
      <TenDayForecast />
    </div>

  );
}