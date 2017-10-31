import apiKey from './key.js';

export default function fetchApi() {
  const weatherApi = 'http://api.wunderground.com/api/' + apiKey + '/conditions/hourly/forecast10day/q/CO/Denver.json';
  const hours = ['12:00 a.m.', '1:00 a.m.', '2:00 a.m.', '3:00 a.m.', '4:00 a.m.', '5:00 a.m.', '6:00 a.m.', '7:00 a.m.', '8:00 a.m.', '9:00 a.m.', '10:00 a.m.', '11:00 a.m.', '12:00 p.m.', '1:00 p.m.', '2:00 p.m.', '3:00 p.m.', '4:00 p.m.', '5:00 p.m.', '6:00 p.m.', '7:00 p.m.', '8:00 p.m.', '9:00 p.m.', '10:00 p.m.', '11:00 p.m.'];

  const cleanedData = {};

  $.getJSON(weatherApi, data => {  
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
    for(let i = 0; i < 7; i++) {
      cleanedData.sevenHour.push(
        {
          hour: hours[data.hourly_forecast[i].FCTTIME.hour],
          icon: data.hourly_forecast[i].icon_url,
          tempF: data.hourly_forecast[i].temp.english
        }
      );
    }

    cleanedData.tenDay = [];
    for(let i = 0; i < data.forecast.simpleforecast.forecastday.length; i++) {
      cleanedData.tenDay.push(
        {
          day: data.forecast.simpleforecast.forecastday[i].date.weekday,
          icon: data.forecast.simpleforecast.forecastday[i].icon_url,
          highF: data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
          lowF: data.forecast.simpleforecast.forecastday[i].low.fahrenheit
        }
      );
    }
  });
  return cleanedData;
}
