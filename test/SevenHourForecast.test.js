import React from 'react';
import {shallow, mount} from 'enzyme';
import SevenHourForecast from '../lib/SevenHourForecast';

describe('SevenHourForecast', () => {
  it('should exist', () => {
    const sevenHourForecast = shallow(<SevenHourForecast array={[]}/>);
    expect(sevenHourForecast).toBeDefined();
  });
});