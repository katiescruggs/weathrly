import React from 'react';
import CurrentWeather from './CurrentWeather.js';
import SevenHourForecast from './SevenHourForecast.js';
import TenDayForecast from './TenDayForecast.js';
import fetchApi from './fetchApi.js';
import apiKey from './key.js';
import clean from './clean.js';
import Header from './Header.js';
import Welcome from './Welcome.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      state: localStorage.state,
      city: localStorage.city
    }
    this.locationClick = this.locationClick.bind(this);
  }

  locationClick() {
    console.log('locationclick')
    this.setState({state: localStorage.state, city: localStorage.city})
    this.fetchApi();
  }

  fetchApi() {
    const state = localStorage.state;
    const city = localStorage.city;

    fetch(`http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/${state}/${city}.json`)
      .then( res => res.json() )
      .then( data => {
        const cleanData = {
          curr: {
            location: data.current_observation.display_location.full, 
            conditions: data.current_observation.weather, 
            temp: data.current_observation.temp_f,
            high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
            low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
            day: data.forecast.txt_forecast.forecastday[0].title,
            month: data.forecast.simpleforecast.forecastday[0].date.monthname_short,
            date: data.forecast.simpleforecast.forecastday[0].date.day,
            summary: data.forecast.txt_forecast.forecastday[0].fcttext,
            icon: data.current_observation.icon_url
          }, 
          seven: [],
          ten: []
        };

        for(let i = 0; i < 7; i++) {
          cleanData.seven.push(
            {
              hour: data.hourly_forecast[i].FCTTIME.civil,
              icon: data.hourly_forecast[i].icon_url,
              tempF: data.hourly_forecast[i].temp.english
            }
          );
        }

        for(let i = 0; i < data.forecast.simpleforecast.forecastday.length; i++) {
          cleanData.ten.push(
            {
              day: data.forecast.simpleforecast.forecastday[i].date.weekday,
              icon: data.forecast.simpleforecast.forecastday[i].icon_url,
              highF: data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
              lowF: data.forecast.simpleforecast.forecastday[i].low.fahrenheit
            }
          );
        }

        this.setState({ apiData: cleanData });
      });
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    if(!localStorage.state && !localStorage.city) {
      return (
        <Welcome locationClick={this.locationClick}/>
      )
    }
    if(this.state.apiData) {
    const {location, conditions, temp, high, low, day, month, date, summary, icon } = this.state.apiData.curr;
    console.log(this.state);
    return (
      <div>
        <Header locationClick={this.locationClick}/>
        <CurrentWeather 
          location={location} 
          conditions={conditions} 
          temp={temp}
          high={high}
          low={low}
          day={day}
          month={month}
          date={date}
          summary={summary}
          icon={icon} />

        <SevenHourForecast array={this.state.apiData.seven} />
        <TenDayForecast array={this.state.apiData.ten} />
      </div>
    );
    }
    return null;

  }
}