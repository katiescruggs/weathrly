import React from 'react';
import {shallow, mount} from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather';

describe('CurrentWeather', () => {
  it('should exist', () => {
    const currentWeather = shallow(<CurrentWeather />);
    expect(currentWeather).toBeDefined();
  });

  it('should render two h3 title tags', () => {
    const currentWeather = shallow(<CurrentWeather />);
    expect(currentWeather.find('h3').length).toEqual(2);
  });

  it('should render one  img', () => {
    const currentWeather = shallow(<CurrentWeather />);
    expect(currentWeather.find('img').length).toEqual(1);
  });

  it('should render four p tags', () => {
    const currentWeather = shallow(<CurrentWeather />);
    expect(currentWeather.find('p').length).toEqual(4);
  });

  it('should render the img with a src based on the prop icon', () => {
    const currentWeather = shallow(<CurrentWeather icon="test.jpg"/>);
    expect(currentWeather.find('img').props().src).toEqual('test.jpg');
  });

  it('should render the current-temp p tag with the prop temp', () => {
    const currentWeather = shallow(<CurrentWeather temp="32"/>);
    expect(currentWeather.find('.current-temp').text()).toEqual('32°F');
  });

  it('should render the current-conditions p tag with the prop conditions', () => {
    const currentWeather = shallow(<CurrentWeather conditions="Cloudy Test"/>);
    expect(currentWeather.find('.current-conditions').text()).toEqual('Current Conditions: Cloudy Test');
  });

  it('should render the today-title h3 with props day, month, and date', () => {
    const currentWeather = shallow(<CurrentWeather day="Monday" month="November" date="6"/>);
    expect(currentWeather.find('.today-title').text()).toEqual('Monday, November 6');
  });

  it('should render the high-low p tag with the high and low props', () => {
    const currentWeather = shallow(<CurrentWeather high="70" low="30"/>);
    expect(currentWeather.find('.high-low').text()).toEqual('70°F / 30°F');
  });

  it('should render the summary p tag with the summary prop', () => {
    const currentWeather = shallow(<CurrentWeather summary="I am a summary" />);
    expect(currentWeather.find('.summary').text()).toEqual('Today\'s Outlook: I am a summary');
  });
});