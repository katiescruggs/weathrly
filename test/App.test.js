import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../lib/App';

global.localStorage = {
  setItem: (key, value) => {
    key: value
  }
}

describe('App', () => {
  it('should exist', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
});