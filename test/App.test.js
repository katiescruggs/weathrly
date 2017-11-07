import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../lib/App';

global.localStorage = {
  setItem(keyword, value) {
    global.localStorage[keyword] = value;
  },
  clear() {
    global.localStorage = {
      setItem(keyword, value) {
        global.localStorage[keyword] = value;
      }
    };
  }
}

const mockApiData = {
  curr: {
    location: 'Denver, CO',
    conditions: 'Fog',
    temp: 36,
    high: '50',
    low: '20',
    day: 'Monday',
    month: 'November',
    date: 6,
    summary: 'I am a summary',
    icon: 'test.jpg'
  },
  seven: [
    {hour: "7:00 AM", icon: "http://icons.wxug.com/i/c/k/cloudy.gif", tempF: "36"},
    {hour: "8:00 AM", icon: "http://icons.wxug.com/i/c/k/cloudy.gif", tempF: "37"},
    {hour: "9:00 AM", icon: "http://icons.wxug.com/i/c/k/cloudy.gif", tempF: "38"},
    {hour: "10:00 AM", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", tempF: "39"},
    {hour: "11:00 AM", icon: "http://icons.wxug.com/i/c/k/clear.gif", tempF: "41"},
    {hour: "12:00 PM", icon: "http://icons.wxug.com/i/c/k/clear.gif", tempF: "44"},
    {hour: "1:00 PM", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", tempF: "48"}
  ],
  ten: [
    {day: "Monday", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", highF: "52", lowF: "26"},
    {day: "Tuesday", icon: "http://icons.wxug.com/i/c/k/snow.gif", highF: "33", lowF: "27"},
    {day: "Wednesday", icon: "http://icons.wxug.com/i/c/k/clear.gif", highF: "52", lowF: "32"},
    {day: "Thursday", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", highF: "50", lowF: "32"},
    {day: "Friday", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", highF: "55", lowF: "33"},
    {day: "Saturday", icon: "http://icons.wxug.com/i/c/k/clear.gif", highF: "52", lowF: "33"},
    {day: "Sunday", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", highF: "55", lowF: "36"},
    {day: "Monday", icon: "http://icons.wxug.com/i/c/k/clear.gif", highF: "62", lowF: "38"},
    {day: "Tuesday", icon: "http://icons.wxug.com/i/c/k/clear.gif", highF: "56", lowF: "31"},
    {day: "Wednesday", icon: "http://icons.wxug.com/i/c/k/clear.gif", highF: "53", lowF: "34"}
  ]
}

global.fetch = jest.fn()
  .mockImplementation( () => {
    let fetch = new Promise( (resolve, reject) => {
      resolve ({ json: function() {
        return {data: mockApiData}; 
      }
    });
  });
  return fetch;
});

describe('App', () => {
  it('should exist', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });

  it('should have a state with default properties', () => {
    const app = shallow(<App />);
    expect(app.state().apiData).toEqual(null);
    expect(app.state().state).toEqual(undefined);
    expect(app.state().city).toEqual(undefined);
    expect(app.state().error).toEqual(false);
  });

  it('should only render the Welcome Component if localStorage is empty', () => {
    const app = shallow(<App />);
    expect(app.find('Welcome').length).toEqual(1);
    expect(app.find('CurrentWeather').length).toEqual(0);
  });

  it('should render Header, CurrentWeather, SevenHourForecast, and TenDayForecast if apiData is in this.state', () => {
    localStorage.setItem('city', 'Denver');
    localStorage.setItem('state', 'CO');

    const app = shallow(<App />);
    app.setState({apiData: mockApiData});
    expect(app.find('Welcome').length).toEqual(0);

    expect(app.find('Header').length).toEqual(1);
    expect(app.find('CurrentWeather').length).toEqual(1);
    expect(app.find('SevenHourForecast').length).toEqual(1);
    expect(app.find('TenDayForecast').length).toEqual(1);
  });
  
  it('should only render the error page if there is an error', () => {
    const app = shallow(<App />);
    app.setState({error: true});
    expect(app.find('Error').length).toEqual(1);
    expect(app.find('CurrentWeather').length).toEqual(0);
  });

  it('should enter the location into this.state from localStorage', () => {
    localStorage.setItem('state', 'OK');
    localStorage.setItem('city', 'Oklahoma City'); 

    const app = new App();

    expect(app.state.state).toEqual('OK');
    expect(app.state.city).toEqual('Oklahoma City');
  });
});
