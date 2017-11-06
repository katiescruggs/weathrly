import React from 'react';
import {shallow, mount} from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather';

describe('CurrentWeather', () => {
  it('should exist', () => {
    const currentWeather = shallow(<CurrentWeather />);
    expect(currentWeather).toBeDefined();
  });
});