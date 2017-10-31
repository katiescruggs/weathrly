import React from 'react';
import CurrentWeather from './CurrentWeather.js';
import SevenHourForecast from './SevenHourForecast.js';
import TenDayForecast from './TenDayForecast.js';

export default function App() {
  return (
    <div>
      <CurrentWeather />
      <SevenHourForecast />
      <TenDayForecast />
    </div>

  );
}