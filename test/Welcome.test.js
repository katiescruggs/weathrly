import React from 'react';
import {shallow, mount} from 'enzyme';
import Welcome from '../lib/Welcome';

describe('Welcome', () => {
  it('should exist', () => {
    const welcome = shallow(<Welcome locationClick={() => {}} />);
    expect(welcome).toBeDefined();
  });

  it('should have a prop locationClick that is a function', () => {
    const welcome = shallow(<Welcome locationClick={() => {}} />);

    expect(welcome.instance().props.locationClick).toBeDefined();
    expect(typeof welcome.instance().props.locationClick).toEqual('function');
  });

  it('should render an h1 title element', () => {
    const welcome = shallow(<Welcome locationClick={() => {}} />);
    expect(welcome.find('h1').length).toEqual(1);
  });

  it('should render a Search element', () => {
    const welcome = shallow(<Welcome locationClick={() => {}} />);
    expect(welcome.find('Search').length).toEqual(1);
  });
});