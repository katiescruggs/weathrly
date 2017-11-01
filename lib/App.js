import React from 'react';
import CurrentWeather from './CurrentWeather.js';
import SevenHourForecast from './SevenHourForecast.js';
import TenDayForecast from './TenDayForecast.js';
import fetchApi from './fetchApi.js';
import apiKey from './key.js';
import clean from './clean.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiData: {location: ''}
    }
  }

  componentWillMount() {
    fetch(`http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/CO/Denver.json`)
      .then( res => res.json() )
      .then( data => {
        const cleanData = {location: data.current_observation.display_location.full, conditions: data.current_observation.weather, temp: data.current_observation.temp_f};
        this.setState({ apiData: cleanData });
        console.log(this.state);
      })
  }

  render() {
    return (
      <div>
        <CurrentWeather location={this.state.apiData.location} conditions={this.state.apiData.conditions} temp={this.state.apiData.temp} />
        <SevenHourForecast  />
        <TenDayForecast  />
      </div>
    );
  }
}