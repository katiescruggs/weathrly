import React from 'react';
import CurrentWeather from './CurrentWeather.js';
import SevenHourForecast from './SevenHourForecast.js';
import TenDayForecast from './TenDayForecast.js';
import apiKey from './key.js';
import clean from './clean.js';
import Header from './Header.js';
import Welcome from './Welcome.js';
import Error from './Error.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      state: localStorage.state,
      city: localStorage.city,
      error: false
    };
    this.locationClick = this.locationClick.bind(this);
  }

  locationClick() {
    this.setState({state: localStorage.state, city: localStorage.city}); 
    this.fetchApi();
  }

  fetchApi() {
    const state = localStorage.state;
    const city = localStorage.city;
    
    //eslint-disable-next-line max-len
    fetch(`https://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/${state}/${city}.json`)
      .then( res => res.json() )
      .then( data => {
        this.setState({error: false});
        const cleanData = clean(data);
        
        this.setState({ apiData: cleanData });
      })
      .catch( () => {
        if (localStorage.state && localStorage.city) {
          this.setState({error: true});
        }
      });
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    if (!localStorage.state && !localStorage.city) {
      return (
        <Welcome locationClick={this.locationClick}/>
      );
    }
    if (this.state.error) {
      return (
        <div>
          <Error locationClick={this.locationClick} />
        </div>
      );
    }
    if (this.state.apiData) {
      const {location, 
             conditions, 
             temp, 
             high, 
             low, 
             day, 
             month, 
             date, 
             summary, 
             icon } = this.state.apiData.curr;
      
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