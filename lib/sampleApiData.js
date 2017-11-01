module.exports = sampleApiData;

const sampleApiData = cleanData(apiResponse);
const cleanedData = {};

function cleanData(data) {
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
  return cleanedData;
}

const apiResponse =
{
  "response": {
  "version":"0.1",
  "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
  "features": {
  "conditions": 1
  ,
  "hourly": 1
  ,
  "forecast10day": 1
  }
  }
  , "current_observation": {
    "image": {
    "url":"http://icons.wxug.com/graphics/wu2/logo_130x80.png",
    "title":"Weather Underground",
    "link":"http://www.wunderground.com"
    },
    "display_location": {
    "full":"Denver, CO",
    "city":"Denver",
    "state":"CO",
    "state_name":"Colorado",
    "country":"US",
    "country_iso3166":"US",
    "zip":"80201",
    "magic":"1",
    "wmo":"99999",
    "latitude":"39.74000168",
    "longitude":"-104.98000336",
    "elevation":"1598.1"
    },
    "observation_location": {
    "full":"Capitol Hill, Denver, Colorado",
    "city":"Capitol Hill, Denver",
    "state":"Colorado",
    "country":"US",
    "country_iso3166":"US",
    "latitude":"39.734711",
    "longitude":"-104.977921",
    "elevation":"5331 ft"
    },
    "estimated": {
    },
    "station_id":"KCODENVE218",
    "observation_time":"Last Updated on October 31, 11:15 AM MDT",
    "observation_time_rfc822":"Tue, 31 Oct 2017 11:15:57 -0600",
    "observation_epoch":"1509470157",
    "local_time_rfc822":"Tue, 31 Oct 2017 11:16:04 -0600",
    "local_epoch":"1509470164",
    "local_tz_short":"MDT",
    "local_tz_long":"America/Denver",
    "local_tz_offset":"-0600",
    "weather":"Partly Cloudy",
    "temperature_string":"37.2 F (2.9 C)",
    "temp_f":37.2,
    "temp_c":2.9,
    "relative_humidity":"64%",
    "wind_string":"Calm",
    "wind_dir":"NW",
    "wind_degrees":323,
    "wind_mph":0.0,
    "wind_gust_mph":0,
    "wind_kph":0,
    "wind_gust_kph":0,
    "pressure_mb":"1014",
    "pressure_in":"29.95",
    "pressure_trend":"-",
    "dewpoint_string":"26 F (-3 C)",
    "dewpoint_f":26,
    "dewpoint_c":-3,
    "heat_index_string":"NA",
    "heat_index_f":"NA",
    "heat_index_c":"NA",
    "windchill_string":"37 F (3 C)",
    "windchill_f":"37",
    "windchill_c":"3",
    "feelslike_string":"37 F (3 C)",
    "feelslike_f":"37",
    "feelslike_c":"3",
    "visibility_mi":"10.0",
    "visibility_km":"16.1",
    "solarradiation":"92",
    "UV":"1.0","precip_1hr_string":"0.00 in ( 0 mm)",
    "precip_1hr_in":"0.00",
    "precip_1hr_metric":" 0",
    "precip_today_string":"0.00 in (0 mm)",
    "precip_today_in":"0.00",
    "precip_today_metric":"0",
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "forecast_url":"http://www.wunderground.com/US/CO/Denver.html",
    "history_url":"http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCODENVE218",
    "ob_url":"http://www.wunderground.com/cgi-bin/findweather/getForecast?query=39.734711,-104.977921",
    "nowcast":""
  }
    ,
  "forecast":{
    "txt_forecast": {
    "date":"10:25 AM MDT",
    "forecastday": [
    {
    "period":0,
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "title":"Tuesday",
    "fcttext":"Sun and clouds mixed. High 56F. Winds light and variable.",
    "fcttext_metric":"Partly cloudy. High 13C. Winds SSE at 10 to 15 km/h.",
    "pop":"0"
    }
    ,
    {
    "period":1,
    "icon":"nt_partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "title":"Tuesday Night",
    "fcttext":"A few clouds. Low 43F. Winds S at 10 to 15 mph.",
    "fcttext_metric":"Partly cloudy. Low 6C. Winds S at 15 to 25 km/h.",
    "pop":"0"
    }
    ,
    {
    "period":2,
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "title":"Wednesday",
    "fcttext":"Intervals of clouds and sunshine. High 73F. Winds SSW at 10 to 20 mph.",
    "fcttext_metric":"Intervals of clouds and sunshine. High 23C. Winds SSW at 15 to 30 km/h. Winds could occasionally gust over 65 km/h.",
    "pop":"0"
    }
    ,
    {
    "period":3,
    "icon":"nt_partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "title":"Wednesday Night",
    "fcttext":"Partly cloudy skies. Low near 45F. Winds SSW at 10 to 20 mph.",
    "fcttext_metric":"Some clouds early will give way to generally clear conditions overnight. Low 7C. Winds SSW at 15 to 25 km/h.",
    "pop":"0"
    }
    ,
    {
    "period":4,
    "icon":"clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "title":"Thursday",
    "fcttext":"A mainly sunny sky. High 64F. Winds N at 5 to 10 mph.",
    "fcttext_metric":"Mainly sunny. High 18C. Winds N at 10 to 15 km/h.",
    "pop":"0"
    }
    ,
    {
    "period":5,
    "icon":"nt_clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "title":"Thursday Night",
    "fcttext":"A mostly clear sky. Low 37F. Winds WNW at 5 to 10 mph.",
    "fcttext_metric":"A mostly clear sky. Low 3C. Winds WNW at 10 to 15 km/h.",
    "pop":"0"
    }
    ,
    {
    "period":6,
    "icon":"clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "title":"Friday",
    "fcttext":"A mainly sunny sky. High around 65F. Winds NE at 5 to 10 mph.",
    "fcttext_metric":"Sunny. High 19C. Winds ENE at 10 to 15 km/h.",
    "pop":"0"
    }
    ,
    {
    "period":7,
    "icon":"nt_clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "title":"Friday Night",
    "fcttext":"Mainly clear early, then a few clouds later on. Low 44F. Winds WSW at 5 to 10 mph.",
    "fcttext_metric":"Clear to partly cloudy. Low 7C. Winds WSW at 10 to 15 km/h.",
    "pop":"0"
    }
    ,
    {
    "period":8,
    "icon":"clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "title":"Saturday",
    "fcttext":"Mostly sunny skies. High 73F. Winds SSW at 10 to 15 mph.",
    "fcttext_metric":"A few clouds from time to time. High 23C. Winds SSW at 15 to 25 km/h.",
    "pop":"0"
    }
    ,
    {
    "period":9,
    "icon":"nt_clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "title":"Saturday Night",
    "fcttext":"Clear skies. Low 49F. Winds SW at 10 to 15 mph.",
    "fcttext_metric":"A mostly clear sky. Low 9C. Winds SW at 15 to 25 km/h.",
    "pop":"0"
    }
    ,
    {
    "period":10,
    "icon":"clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "title":"Sunday",
    "fcttext":"Sunshine and some clouds. High 68F. Winds WSW at 15 to 25 mph.",
    "fcttext_metric":"Except for a few afternoon clouds, mainly sunny. High near 20C. Winds WSW at 25 to 40 km/h.",
    "pop":"0"
    }
    ,
    {
    "period":11,
    "icon":"nt_partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "title":"Sunday Night",
    "fcttext":"Partly to mostly cloudy. Low around 40F. SSW winds shifting to ESE at 10 to 15 mph.",
    "fcttext_metric":"Partly cloudy in the evening with more clouds for later at night. Low 4C. SSW winds shifting to ESE at 15 to 25 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":12,
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "title":"Monday",
    "fcttext":"Partly cloudy skies. Slight chance of a rain shower. High 52F. Winds NNW at 5 to 10 mph.",
    "fcttext_metric":"Partly cloudy skies. Slight chance of a rain shower. High 11C. Winds NNW at 10 to 15 km/h.",
    "pop":"20"
    }
    ,
    {
    "period":13,
    "icon":"nt_partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "title":"Monday Night",
    "fcttext":"A few clouds from time to time. Low 32F. Winds ENE at 5 to 10 mph.",
    "fcttext_metric":"Partly cloudy. Low near 0C. Winds ENE at 10 to 15 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":14,
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "title":"Tuesday",
    "fcttext":"Some sun in the morning with increasing clouds during the afternoon. High 47F. Winds NE at 5 to 10 mph.",
    "fcttext_metric":"Intervals of clouds and sunshine in the morning with more clouds for later in the day. High 8C. Winds NE at 10 to 15 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":15,
    "icon":"nt_partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "title":"Tuesday Night",
    "fcttext":"Some clouds early will give way to generally clear conditions overnight. Low 33F. Winds S at 5 to 10 mph.",
    "fcttext_metric":"Some clouds early will give way to generally clear conditions overnight. Low around 0C. Winds light and variable.",
    "pop":"10"
    }
    ,
    {
    "period":16,
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "title":"Wednesday",
    "fcttext":"Partly cloudy skies. High around 50F. Winds WNW at 5 to 10 mph.",
    "fcttext_metric":"Partly cloudy skies. High around 10C. Winds NW at 10 to 15 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":17,
    "icon":"nt_clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "title":"Wednesday Night",
    "fcttext":"Mostly clear skies. Low 32F. Winds WSW at 5 to 10 mph.",
    "fcttext_metric":"A few clouds from time to time. Low around 0C. Winds WSW at 10 to 15 km/h.",
    "pop":"0"
    }
    ,
    {
    "period":18,
    "icon":"clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "title":"Thursday",
    "fcttext":"Abundant sunshine. High 52F. Winds NW at 5 to 10 mph.",
    "fcttext_metric":"Mostly sunny skies. High 11C. Winds NW at 10 to 15 km/h.",
    "pop":"0"
    }
    ,
    {
    "period":19,
    "icon":"nt_clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "title":"Thursday Night",
    "fcttext":"Mainly clear skies. Low 36F. Winds WSW at 5 to 10 mph.",
    "fcttext_metric":"Mainly clear skies. Low 2C. Winds WSW at 10 to 15 km/h.",
    "pop":"0"
    }
    ]
    },
    "simpleforecast": {
    "forecastday": [
    {"date":{
  "epoch":"1509498000",
  "pretty":"7:00 PM MDT on October 31, 2017",
  "day":31,
  "month":10,
  "year":2017,
  "yday":303,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"1",
  "monthname":"October",
  "monthname_short":"Oct",
  "weekday_short":"Tue",
  "weekday":"Tuesday",
  "ampm":"PM",
  "tz_short":"MDT",
  "tz_long":"America/Denver"
},
    "period":1,
    "high": {
    "fahrenheit":"56",
    "celsius":"13"
    },
    "low": {
    "fahrenheit":"43",
    "celsius":"6"
    },
    "conditions":"Partly Cloudy",
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "skyicon":"",
    "pop":0,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "SSE",
    "degrees": 153
    },
    "avewind": {
    "mph": 5,
    "kph": 8,
    "dir": "SSE",
    "degrees": 153
    },
    "avehumidity": 44,
    "maxhumidity": 71,
    "minhumidity": 34
    }
    ,
    {"date":{
  "epoch":"1509584400",
  "pretty":"7:00 PM MDT on November 01, 2017",
  "day":1,
  "month":11,
  "year":2017,
  "yday":304,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"1",
  "monthname":"November",
  "monthname_short":"Nov",
  "weekday_short":"Wed",
  "weekday":"Wednesday",
  "ampm":"PM",
  "tz_short":"MDT",
  "tz_long":"America/Denver"
},
    "period":2,
    "high": {
    "fahrenheit":"73",
    "celsius":"23"
    },
    "low": {
    "fahrenheit":"45",
    "celsius":"7"
    },
    "conditions":"Partly Cloudy",
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "skyicon":"",
    "pop":0,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 20,
    "kph": 32,
    "dir": "SSW",
    "degrees": 204
    },
    "avewind": {
    "mph": 14,
    "kph": 23,
    "dir": "SSW",
    "degrees": 204
    },
    "avehumidity": 27,
    "maxhumidity": 37,
    "minhumidity": 13
    }
    ,
    {"date":{
  "epoch":"1509670800",
  "pretty":"7:00 PM MDT on November 02, 2017",
  "day":2,
  "month":11,
  "year":2017,
  "yday":305,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"1",
  "monthname":"November",
  "monthname_short":"Nov",
  "weekday_short":"Thu",
  "weekday":"Thursday",
  "ampm":"PM",
  "tz_short":"MDT",
  "tz_long":"America/Denver"
},
    "period":3,
    "high": {
    "fahrenheit":"64",
    "celsius":"18"
    },
    "low": {
    "fahrenheit":"37",
    "celsius":"3"
    },
    "conditions":"Clear",
    "icon":"clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "skyicon":"",
    "pop":0,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "N",
    "degrees": 352
    },
    "avewind": {
    "mph": 8,
    "kph": 13,
    "dir": "N",
    "degrees": 352
    },
    "avehumidity": 40,
    "maxhumidity": 54,
    "minhumidity": 28
    }
    ,
    {"date":{
  "epoch":"1509757200",
  "pretty":"7:00 PM MDT on November 03, 2017",
  "day":3,
  "month":11,
  "year":2017,
  "yday":306,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"1",
  "monthname":"November",
  "monthname_short":"Nov",
  "weekday_short":"Fri",
  "weekday":"Friday",
  "ampm":"PM",
  "tz_short":"MDT",
  "tz_long":"America/Denver"
},
    "period":4,
    "high": {
    "fahrenheit":"65",
    "celsius":"18"
    },
    "low": {
    "fahrenheit":"44",
    "celsius":"7"
    },
    "conditions":"Clear",
    "icon":"clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "skyicon":"",
    "pop":0,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "NE",
    "degrees": 56
    },
    "avewind": {
    "mph": 7,
    "kph": 11,
    "dir": "NE",
    "degrees": 56
    },
    "avehumidity": 50,
    "maxhumidity": 72,
    "minhumidity": 26
    }
    ,
    {"date":{
  "epoch":"1509843600",
  "pretty":"7:00 PM MDT on November 04, 2017",
  "day":4,
  "month":11,
  "year":2017,
  "yday":307,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"1",
  "monthname":"November",
  "monthname_short":"Nov",
  "weekday_short":"Sat",
  "weekday":"Saturday",
  "ampm":"PM",
  "tz_short":"MDT",
  "tz_long":"America/Denver"
},
    "period":5,
    "high": {
    "fahrenheit":"73",
    "celsius":"23"
    },
    "low": {
    "fahrenheit":"49",
    "celsius":"9"
    },
    "conditions":"Clear",
    "icon":"clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "skyicon":"",
    "pop":0,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 15,
    "kph": 24,
    "dir": "SSW",
    "degrees": 205
    },
    "avewind": {
    "mph": 11,
    "kph": 18,
    "dir": "SSW",
    "degrees": 205
    },
    "avehumidity": 32,
    "maxhumidity": 47,
    "minhumidity": 15
    }
    ,
    {"date":{
  "epoch":"1509933600",
  "pretty":"7:00 PM MST on November 05, 2017",
  "day":5,
  "month":11,
  "year":2017,
  "yday":308,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"November",
  "monthname_short":"Nov",
  "weekday_short":"Sun",
  "weekday":"Sunday",
  "ampm":"PM",
  "tz_short":"MST",
  "tz_long":"America/Denver"
},
    "period":6,
    "high": {
    "fahrenheit":"68",
    "celsius":"20"
    },
    "low": {
    "fahrenheit":"40",
    "celsius":"4"
    },
    "conditions":"Clear",
    "icon":"clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "skyicon":"",
    "pop":0,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 25,
    "kph": 40,
    "dir": "WSW",
    "degrees": 246
    },
    "avewind": {
    "mph": 17,
    "kph": 27,
    "dir": "WSW",
    "degrees": 246
    },
    "avehumidity": 33,
    "maxhumidity": 52,
    "minhumidity": 16
    }
    ,
    {"date":{
  "epoch":"1510020000",
  "pretty":"7:00 PM MST on November 06, 2017",
  "day":6,
  "month":11,
  "year":2017,
  "yday":309,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"November",
  "monthname_short":"Nov",
  "weekday_short":"Mon",
  "weekday":"Monday",
  "ampm":"PM",
  "tz_short":"MST",
  "tz_long":"America/Denver"
},
    "period":7,
    "high": {
    "fahrenheit":"52",
    "celsius":"11"
    },
    "low": {
    "fahrenheit":"32",
    "celsius":"0"
    },
    "conditions":"Partly Cloudy",
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "skyicon":"",
    "pop":20,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "NNW",
    "degrees": 338
    },
    "avewind": {
    "mph": 9,
    "kph": 14,
    "dir": "NNW",
    "degrees": 338
    },
    "avehumidity": 55,
    "maxhumidity": 66,
    "minhumidity": 40
    }
    ,
    {"date":{
  "epoch":"1510106400",
  "pretty":"7:00 PM MST on November 07, 2017",
  "day":7,
  "month":11,
  "year":2017,
  "yday":310,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"November",
  "monthname_short":"Nov",
  "weekday_short":"Tue",
  "weekday":"Tuesday",
  "ampm":"PM",
  "tz_short":"MST",
  "tz_long":"America/Denver"
},
    "period":8,
    "high": {
    "fahrenheit":"47",
    "celsius":"8"
    },
    "low": {
    "fahrenheit":"33",
    "celsius":"1"
    },
    "conditions":"Partly Cloudy",
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "skyicon":"",
    "pop":10,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "NE",
    "degrees": 52
    },
    "avewind": {
    "mph": 8,
    "kph": 13,
    "dir": "NE",
    "degrees": 52
    },
    "avehumidity": 59,
    "maxhumidity": 75,
    "minhumidity": 41
    }
    ,
    {"date":{
  "epoch":"1510192800",
  "pretty":"7:00 PM MST on November 08, 2017",
  "day":8,
  "month":11,
  "year":2017,
  "yday":311,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"November",
  "monthname_short":"Nov",
  "weekday_short":"Wed",
  "weekday":"Wednesday",
  "ampm":"PM",
  "tz_short":"MST",
  "tz_long":"America/Denver"
},
    "period":9,
    "high": {
    "fahrenheit":"50",
    "celsius":"10"
    },
    "low": {
    "fahrenheit":"32",
    "celsius":"0"
    },
    "conditions":"Partly Cloudy",
    "icon":"partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "skyicon":"",
    "pop":10,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "WNW",
    "degrees": 302
    },
    "avewind": {
    "mph": 6,
    "kph": 10,
    "dir": "WNW",
    "degrees": 302
    },
    "avehumidity": 59,
    "maxhumidity": 70,
    "minhumidity": 42
    }
    ,
    {"date":{
  "epoch":"1510279200",
  "pretty":"7:00 PM MST on November 09, 2017",
  "day":9,
  "month":11,
  "year":2017,
  "yday":312,
  "hour":19,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"November",
  "monthname_short":"Nov",
  "weekday_short":"Thu",
  "weekday":"Thursday",
  "ampm":"PM",
  "tz_short":"MST",
  "tz_long":"America/Denver"
},
    "period":10,
    "high": {
    "fahrenheit":"52",
    "celsius":"11"
    },
    "low": {
    "fahrenheit":"36",
    "celsius":"2"
    },
    "conditions":"Clear",
    "icon":"clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "skyicon":"",
    "pop":0,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0
    },
    "snow_allday": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_day": {
    "in": 0.0,
    "cm": 0.0
    },
    "snow_night": {
    "in": 0.0,
    "cm": 0.0
    },
    "maxwind": {
    "mph": 10,
    "kph": 16,
    "dir": "NW",
    "degrees": 309
    },
    "avewind": {
    "mph": 8,
    "kph": 13,
    "dir": "NW",
    "degrees": 309
    },
    "avehumidity": 52,
    "maxhumidity": 72,
    "minhumidity": 33
    }
    ]
    }
  }
    ,
  "hourly_forecast": [
    {
    "FCTTIME": {
    "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "31","mday_padded": "31","yday": "303","isdst": "1","epoch": "1509472800","pretty": "12:00 PM MDT on October 31, 2017","civil": "12:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "40", "metric": "4"},
    "dewpoint": {"english": "28", "metric": "-2"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "39",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "S", "degrees": "175"},
    "wx": "Partly Cloudy",
    "uvi": "3",
    "humidity": "62",
    "windchill": {"english": "36", "metric": "2"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "36", "metric": "2"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.88", "metric": "1012"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "31","mday_padded": "31","yday": "303","isdst": "1","epoch": "1509476400","pretty": "1:00 PM MDT on October 31, 2017","civil": "1:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "44", "metric": "7"},
    "dewpoint": {"english": "28", "metric": "-2"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "39",
    "wspd": {"english": "4", "metric": "6"},
    "wdir": {"dir": "SE", "degrees": "132"},
    "wx": "Partly Cloudy",
    "uvi": "3",
    "humidity": "52",
    "windchill": {"english": "43", "metric": "6"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "43", "metric": "6"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.82", "metric": "1010"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "31","mday_padded": "31","yday": "303","isdst": "1","epoch": "1509480000","pretty": "2:00 PM MDT on October 31, 2017","civil": "2:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "48", "metric": "9"},
    "dewpoint": {"english": "27", "metric": "-3"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "38",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "ESE", "degrees": "120"},
    "wx": "Partly Cloudy",
    "uvi": "3",
    "humidity": "43",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "48", "metric": "9"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.77", "metric": "1008"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "31","mday_padded": "31","yday": "303","isdst": "1","epoch": "1509483600","pretty": "3:00 PM MDT on October 31, 2017","civil": "3:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "52", "metric": "11"},
    "dewpoint": {"english": "26", "metric": "-3"},
    "condition": "Clear",
    "icon": "clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "fctcode": "1",
    "sky": "27",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "SE", "degrees": "127"},
    "wx": "Mostly Sunny",
    "uvi": "2",
    "humidity": "36",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "52", "metric": "11"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.72", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "31","mday_padded": "31","yday": "303","isdst": "1","epoch": "1509487200","pretty": "4:00 PM MDT on October 31, 2017","civil": "4:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "54", "metric": "12"},
    "dewpoint": {"english": "26", "metric": "-3"},
    "condition": "Clear",
    "icon": "clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "fctcode": "1",
    "sky": "26",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "SE", "degrees": "142"},
    "wx": "Mostly Sunny",
    "uvi": "1",
    "humidity": "34",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "54", "metric": "12"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.7", "metric": "1006"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "31","mday_padded": "31","yday": "303","isdst": "1","epoch": "1509490800","pretty": "5:00 PM MDT on October 31, 2017","civil": "5:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "54", "metric": "12"},
    "dewpoint": {"english": "27", "metric": "-3"},
    "condition": "Clear",
    "icon": "clear",
    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
    "fctcode": "1",
    "sky": "26",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "SSE", "degrees": "153"},
    "wx": "Mostly Sunny",
    "uvi": "0",
    "humidity": "34",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "54", "metric": "12"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.68", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "31","mday_padded": "31","yday": "303","isdst": "1","epoch": "1509494400","pretty": "6:00 PM MDT on October 31, 2017","civil": "6:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "53", "metric": "12"},
    "dewpoint": {"english": "27", "metric": "-3"},
    "condition": "Clear",
    "icon": "clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "fctcode": "1",
    "sky": "25",
    "wspd": {"english": "5", "metric": "8"},
    "wdir": {"dir": "SSE", "degrees": "158"},
    "wx": "Mostly Clear",
    "uvi": "0",
    "humidity": "37",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "53", "metric": "12"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.67", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "31","mday_padded": "31","yday": "303","isdst": "1","epoch": "1509498000","pretty": "7:00 PM MDT on October 31, 2017","civil": "7:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "49", "metric": "9"},
    "dewpoint": {"english": "27", "metric": "-3"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "41",
    "wspd": {"english": "6", "metric": "10"},
    "wdir": {"dir": "S", "degrees": "179"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "41",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "49", "metric": "9"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.67", "metric": "1005"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "31","mday_padded": "31","yday": "303","isdst": "1","epoch": "1509501600","pretty": "8:00 PM MDT on October 31, 2017","civil": "8:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "47", "metric": "8"},
    "dewpoint": {"english": "27", "metric": "-3"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "42",
    "wspd": {"english": "8", "metric": "13"},
    "wdir": {"dir": "S", "degrees": "190"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "46",
    "windchill": {"english": "42", "metric": "6"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "42", "metric": "6"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.65", "metric": "1004"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "31","mday_padded": "31","yday": "303","isdst": "1","epoch": "1509505200","pretty": "9:00 PM MDT on October 31, 2017","civil": "9:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "46", "metric": "8"},
    "dewpoint": {"english": "25", "metric": "-4"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "44",
    "wspd": {"english": "9", "metric": "14"},
    "wdir": {"dir": "SSW", "degrees": "192"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "44",
    "windchill": {"english": "42", "metric": "6"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "42", "metric": "6"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.64", "metric": "1004"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "31","mday_padded": "31","yday": "303","isdst": "1","epoch": "1509508800","pretty": "10:00 PM MDT on October 31, 2017","civil": "10:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "45", "metric": "7"},
    "dewpoint": {"english": "24", "metric": "-4"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "49",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "S", "degrees": "186"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "42",
    "windchill": {"english": "39", "metric": "4"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "39", "metric": "4"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.62", "metric": "1003"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "10","mon_padded": "10","mon_abbrev": "Oct","mday": "31","mday_padded": "31","yday": "303","isdst": "1","epoch": "1509512400","pretty": "11:00 PM MDT on October 31, 2017","civil": "11:00 PM","month_name": "October","month_name_abbrev": "Oct","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "46", "metric": "8"},
    "dewpoint": {"english": "23", "metric": "-5"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "61",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "S", "degrees": "183"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "40",
    "windchill": {"english": "41", "metric": "5"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "41", "metric": "5"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.59", "metric": "1002"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509516000","pretty": "12:00 AM MDT on November 01, 2017","civil": "12:00 AM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "47", "metric": "8"},
    "dewpoint": {"english": "22", "metric": "-6"},
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "65",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "S", "degrees": "190"},
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "37",
    "windchill": {"english": "41", "metric": "5"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "41", "metric": "5"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.57", "metric": "1001"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509519600","pretty": "1:00 AM MDT on November 01, 2017","civil": "1:00 AM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "47", "metric": "8"},
    "dewpoint": {"english": "22", "metric": "-6"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "45",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "S", "degrees": "185"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "37",
    "windchill": {"english": "41", "metric": "5"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "41", "metric": "5"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.56", "metric": "1001"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509523200","pretty": "2:00 AM MDT on November 01, 2017","civil": "2:00 AM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "47", "metric": "8"},
    "dewpoint": {"english": "21", "metric": "-6"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "34",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "S", "degrees": "185"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "35",
    "windchill": {"english": "41", "metric": "5"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "41", "metric": "5"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.55", "metric": "1001"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509526800","pretty": "3:00 AM MDT on November 01, 2017","civil": "3:00 AM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "47", "metric": "8"},
    "dewpoint": {"english": "21", "metric": "-6"},
    "condition": "Clear",
    "icon": "clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "fctcode": "1",
    "sky": "23",
    "wspd": {"english": "12", "metric": "19"},
    "wdir": {"dir": "S", "degrees": "190"},
    "wx": "Mostly Clear",
    "uvi": "0",
    "humidity": "35",
    "windchill": {"english": "41", "metric": "5"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "41", "metric": "5"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.54", "metric": "1000"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509530400","pretty": "4:00 AM MDT on November 01, 2017","civil": "4:00 AM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "46", "metric": "8"},
    "dewpoint": {"english": "20", "metric": "-7"},
    "condition": "Clear",
    "icon": "clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "fctcode": "1",
    "sky": "22",
    "wspd": {"english": "12", "metric": "19"},
    "wdir": {"dir": "SSW", "degrees": "192"},
    "wx": "Mostly Clear",
    "uvi": "0",
    "humidity": "36",
    "windchill": {"english": "41", "metric": "5"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "41", "metric": "5"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.53", "metric": "1000"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509534000","pretty": "5:00 AM MDT on November 01, 2017","civil": "5:00 AM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "45", "metric": "7"},
    "dewpoint": {"english": "20", "metric": "-7"},
    "condition": "Clear",
    "icon": "clear",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
    "fctcode": "1",
    "sky": "24",
    "wspd": {"english": "12", "metric": "19"},
    "wdir": {"dir": "SSW", "degrees": "192"},
    "wx": "Mostly Clear",
    "uvi": "0",
    "humidity": "37",
    "windchill": {"english": "39", "metric": "4"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "39", "metric": "4"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.53", "metric": "1000"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509537600","pretty": "6:00 AM MDT on November 01, 2017","civil": "6:00 AM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "44", "metric": "7"},
    "dewpoint": {"english": "19", "metric": "-7"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "30",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "S", "degrees": "186"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "37",
    "windchill": {"english": "39", "metric": "4"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "39", "metric": "4"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.53", "metric": "1000"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509541200","pretty": "7:00 AM MDT on November 01, 2017","civil": "7:00 AM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "45", "metric": "7"},
    "dewpoint": {"english": "19", "metric": "-7"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "49",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "S", "degrees": "176"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "35",
    "windchill": {"english": "39", "metric": "4"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "39", "metric": "4"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.53", "metric": "1000"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509544800","pretty": "8:00 AM MDT on November 01, 2017","civil": "8:00 AM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "45", "metric": "7"},
    "dewpoint": {"english": "20", "metric": "-7"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "41",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "SSE", "degrees": "169"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "37",
    "windchill": {"english": "39", "metric": "4"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "39", "metric": "4"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.53", "metric": "1000"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509548400","pretty": "9:00 AM MDT on November 01, 2017","civil": "9:00 AM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "49", "metric": "9"},
    "dewpoint": {"english": "21", "metric": "-6"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "44",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "S", "degrees": "178"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "33",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "49", "metric": "9"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.51", "metric": "999"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509552000","pretty": "10:00 AM MDT on November 01, 2017","civil": "10:00 AM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "56", "metric": "13"},
    "dewpoint": {"english": "22", "metric": "-6"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "43",
    "wspd": {"english": "12", "metric": "19"},
    "wdir": {"dir": "S", "degrees": "173"},
    "wx": "Partly Cloudy",
    "uvi": "1",
    "humidity": "26",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "56", "metric": "13"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.49", "metric": "999"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509555600","pretty": "11:00 AM MDT on November 01, 2017","civil": "11:00 AM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "61", "metric": "16"},
    "dewpoint": {"english": "20", "metric": "-7"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "50",
    "wspd": {"english": "13", "metric": "21"},
    "wdir": {"dir": "S", "degrees": "179"},
    "wx": "Partly Cloudy",
    "uvi": "2",
    "humidity": "20",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "61", "metric": "16"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.46", "metric": "998"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509559200","pretty": "12:00 PM MDT on November 01, 2017","civil": "12:00 PM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "65", "metric": "18"},
    "dewpoint": {"english": "18", "metric": "-8"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "51",
    "wspd": {"english": "14", "metric": "23"},
    "wdir": {"dir": "SSW", "degrees": "194"},
    "wx": "Partly Cloudy",
    "uvi": "3",
    "humidity": "16",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "65", "metric": "18"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.43", "metric": "997"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509562800","pretty": "1:00 PM MDT on November 01, 2017","civil": "1:00 PM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "69", "metric": "21"},
    "dewpoint": {"english": "17", "metric": "-8"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "50",
    "wspd": {"english": "13", "metric": "21"},
    "wdir": {"dir": "SW", "degrees": "218"},
    "wx": "Partly Cloudy",
    "uvi": "3",
    "humidity": "14",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "69", "metric": "21"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.41", "metric": "996"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509566400","pretty": "2:00 PM MDT on November 01, 2017","civil": "2:00 PM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "71", "metric": "22"},
    "dewpoint": {"english": "18", "metric": "-8"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "49",
    "wspd": {"english": "14", "metric": "23"},
    "wdir": {"dir": "WSW", "degrees": "241"},
    "wx": "Partly Cloudy",
    "uvi": "3",
    "humidity": "13",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "71", "metric": "22"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.39", "metric": "995"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509570000","pretty": "3:00 PM MDT on November 01, 2017","civil": "3:00 PM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "72", "metric": "22"},
    "dewpoint": {"english": "19", "metric": "-7"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "47",
    "wspd": {"english": "14", "metric": "23"},
    "wdir": {"dir": "WSW", "degrees": "246"},
    "wx": "Partly Cloudy",
    "uvi": "2",
    "humidity": "14",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "72", "metric": "22"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.38", "metric": "995"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509573600","pretty": "4:00 PM MDT on November 01, 2017","civil": "4:00 PM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "71", "metric": "22"},
    "dewpoint": {"english": "20", "metric": "-7"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "52",
    "wspd": {"english": "15", "metric": "24"},
    "wdir": {"dir": "WSW", "degrees": "243"},
    "wx": "Partly Cloudy",
    "uvi": "1",
    "humidity": "15",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "71", "metric": "22"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.38", "metric": "995"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509577200","pretty": "5:00 PM MDT on November 01, 2017","civil": "5:00 PM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "70", "metric": "21"},
    "dewpoint": {"english": "22", "metric": "-6"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "48",
    "wspd": {"english": "13", "metric": "21"},
    "wdir": {"dir": "SW", "degrees": "218"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "16",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "70", "metric": "21"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.4", "metric": "996"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509580800","pretty": "6:00 PM MDT on November 01, 2017","civil": "6:00 PM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "68", "metric": "20"},
    "dewpoint": {"english": "22", "metric": "-6"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "47",
    "wspd": {"english": "13", "metric": "21"},
    "wdir": {"dir": "SSW", "degrees": "210"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "17",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "68", "metric": "20"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.42", "metric": "996"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509584400","pretty": "7:00 PM MDT on November 01, 2017","civil": "7:00 PM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "64", "metric": "18"},
    "dewpoint": {"english": "24", "metric": "-4"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "48",
    "wspd": {"english": "13", "metric": "21"},
    "wdir": {"dir": "SSW", "degrees": "212"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "22",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "64", "metric": "18"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.45", "metric": "997"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509588000","pretty": "8:00 PM MDT on November 01, 2017","civil": "8:00 PM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "60", "metric": "16"},
    "dewpoint": {"english": "25", "metric": "-4"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "48",
    "wspd": {"english": "12", "metric": "19"},
    "wdir": {"dir": "SSW", "degrees": "207"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "25",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "60", "metric": "16"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.48", "metric": "998"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509591600","pretty": "9:00 PM MDT on November 01, 2017","civil": "9:00 PM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "58", "metric": "14"},
    "dewpoint": {"english": "26", "metric": "-3"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "49",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "SSW", "degrees": "198"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "29",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "58", "metric": "14"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.51", "metric": "999"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509595200","pretty": "10:00 PM MDT on November 01, 2017","civil": "10:00 PM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "56", "metric": "13"},
    "dewpoint": {"english": "26", "metric": "-3"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "48",
    "wspd": {"english": "11", "metric": "18"},
    "wdir": {"dir": "S", "degrees": "190"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "32",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "56", "metric": "13"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.53", "metric": "1000"}
    }
    ,
    {
    "FCTTIME": {
    "hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "11","mon_padded": "11","mon_abbrev": "Nov","mday": "1","mday_padded": "01","yday": "304","isdst": "1","epoch": "1509598800","pretty": "11:00 PM MDT on November 01, 2017","civil": "11:00 PM","month_name": "November","month_name_abbrev": "Nov","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
    },
    "temp": {"english": "55", "metric": "13"},
    "dewpoint": {"english": "27", "metric": "-3"},
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "45",
    "wspd": {"english": "10", "metric": "16"},
    "wdir": {"dir": "S", "degrees": "177"},
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "33",
    "windchill": {"english": "-9999", "metric": "-9999"},
    "heatindex": {"english": "-9999", "metric": "-9999"},
    "feelslike": {"english": "55", "metric": "13"},
    "qpf": {"english": "0.0", "metric": "0"},
    "snow": {"english": "0.0", "metric": "0"},
    "pop": "0",
    "mslp": {"english": "29.55", "metric": "1001"}
    }
  ]
}