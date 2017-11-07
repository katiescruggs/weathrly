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

  it('should have a state with default properties', () => {
    const app = shallow(<App />);
    expect(app.state().apiData).toEqual(null);
  });
});