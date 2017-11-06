import React from 'react';
import {shallow, mount} from 'enzyme';
import TenDayForecast from '../lib/TenDayForecast';

const mockArray = [
  {day: "Monday", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", highF: "52", lowF: "26"},
  {day: "Tuesday", icon: "http://icons.wxug.com/i/c/k/snow.gif", highF: "33", lowF: "27"},
  {day: "Wednesday", icon: "http://icons.wxug.com/i/c/k/clear.gif", highF: "52", lowF: "32"},
  {day: "Thursday", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", highF: "50", lowF: "32"},
  {day: "Friday", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", highF: "55", lowF: "33"},
  {day: "Saturday", icon: "http://icons.wxug.com/i/c/k/clear.gif", highF: "52", lowF: "33"},
  {day: "Sunday", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", highF: "55", lowF: "36"},
  {day: "Monday", icon: "http://icons.wxug.com/i/c/k/clear.gif", highF: "62", lowF: "38"},
  {day: "Tuesday", icon: "http://icons.wxug.com/i/c/k/clear.gif", highF: "56", lowF: "31"},
  {day: "Wednesday", icon: "http://icons.wxug.com/i/c/k/clear.gif", highF: "53", lowF: "34"},
]

describe('TenDayForecast', () => {
  it('should exist', () => {
    const tenDayForecast = shallow(<TenDayForecast array={[]}/>);
    expect(tenDayForecast).toBeDefined();
  });
});