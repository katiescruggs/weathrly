export default function clean(data) {
  const cleanedData = {};

  cleanedData.curr = {
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
          hour: data.hourly_forecast[i].FCTTIME.civil,
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
  return cleanedData;
}