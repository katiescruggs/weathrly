export default function clean(data) {
  const simpleForecast = data.forecast.simpleforecast;
  const cleanData = {
    curr: {
      location: data.current_observation.display_location.full, 
      conditions: data.current_observation.weather, 
      temp: data.current_observation.temp_f,
      high: simpleForecast.forecastday[0].high.fahrenheit,
      low: simpleForecast.forecastday[0].low.fahrenheit,
      day: data.forecast.txt_forecast.forecastday[0].title,
      month: simpleForecast.forecastday[0].date.monthname_short,
      date: simpleForecast.forecastday[0].date.day,
      summary: data.forecast.txt_forecast.forecastday[0].fcttext,
      icon: data.current_observation.icon_url
    }, 
    seven: [],
    ten: []
  };
  
  for (let i = 0; i < 7; i++) {
    cleanData.seven.push(
      {
        hour: data.hourly_forecast[i].FCTTIME.civil,
        icon: data.hourly_forecast[i].icon_url,
        tempF: data.hourly_forecast[i].temp.english
      }
    );
  }

  for (let i = 0; i < simpleForecast.forecastday.length; i++) {
    cleanData.ten.push(
      {
        day: simpleForecast.forecastday[i].date.weekday,
        icon: simpleForecast.forecastday[i].icon_url,
        highF: simpleForecast.forecastday[i].high.fahrenheit,
        lowF: simpleForecast.forecastday[i].low.fahrenheit
      }
    );
  }
  return cleanData;
}