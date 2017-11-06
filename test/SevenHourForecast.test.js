import React from 'react';
import {shallow, mount} from 'enzyme';
import SevenHourForecast from '../lib/SevenHourForecast';

const mockArray = [
  {hour: "7:00 AM", icon: "http://icons.wxug.com/i/c/k/cloudy.gif", tempF: "36"},
  {hour: "8:00 AM", icon: "http://icons.wxug.com/i/c/k/cloudy.gif", tempF: "37"},
  {hour: "9:00 AM", icon: "http://icons.wxug.com/i/c/k/cloudy.gif", tempF: "38"},
  {hour: "10:00 AM", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", tempF: "39"},
  {hour: "11:00 AM", icon: "http://icons.wxug.com/i/c/k/clear.gif", tempF: "41"},
  {hour: "12:00 PM", icon: "http://icons.wxug.com/i/c/k/clear.gif", tempF: "44"},
  {hour: "1:00 PM", icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif", tempF: "48"}
]

describe('SevenHourForecast', () => {
  it('should exist', () => {
    const sevenHourForecast = shallow(<SevenHourForecast array={[]}/>);
    expect(sevenHourForecast).toBeDefined();
  });

  it('should render one h2 tag', () => {
    const sevenHourForecast = shallow(<SevenHourForecast array={[]}/>);
    expect(sevenHourForecast.find('h2').length).toEqual(1);
  });

  it('should render seven card tags when given an array of 7 objects', () => {
    const sevenHourForecast = shallow(<SevenHourForecast array={mockArray}/>);
    expect(sevenHourForecast.find('Card').length).toEqual(7);
  });

  it('should pass props from its array prop to its Card children', () => {
    const sevenHourForecast = shallow(<SevenHourForecast array={mockArray}/>);

    expect(sevenHourForecast.find('Card').first().props().time).toEqual(mockArray[0].hour);
    expect(sevenHourForecast.find('Card').first().props().icon).toEqual(mockArray[0].icon);
    expect(sevenHourForecast.find('Card').first().props().temp).toEqual([mockArray[0].tempF]);
  });
});