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
        const cleanData = {
          location: data.current_observation.display_location.full, 
          conditions: data.current_observation.weather, 
          temp: data.current_observation.temp_f,
          high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
          low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
          day: data.forecast.txt_forecast.forecastday[0].title,
          summary: data.forecast.txt_forecast.forecastday[0].fcttext
        };
        this.setState({ apiData: cleanData });
        console.log(this.state);
      })
  }

  render() {
    return (
      <div>
        <CurrentWeather 
          location={this.state.apiData.location} 
          conditions={this.state.apiData.conditions} 
          temp={this.state.apiData.temp}
          high={this.state.apiData.high}
          low={this.state.apiData.low}
          day={this.state.apiData.day}
          summary={this.state.apiData.summary} />
        <SevenHourForecast  />
        <TenDayForecast  />
      </div>
    );
  }
}