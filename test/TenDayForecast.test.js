import React from 'react';
import {shallow, mount} from 'enzyme';
import TenDayForecast from '../lib/TenDayForecast';

describe('TenDayForecast', () => {
  it('should exist', () => {
    const tenDayForecast = shallow(<TenDayForecast array={[]}/>);
    expect(tenDayForecast).toBeDefined();
  });
});