import React from 'react';
import {shallow, mount} from 'enzyme';
import Error from '../lib/Error';

describe('Error', () => {
  it('should exist', () => {
    const error = shallow(<Error locationClick={() => {}} />);
    expect(error).toBeDefined();
  });

  it('should have a prop locationClick that is a function', () => {
    const error = shallow(<Error locationClick={() => {}} />);

    expect(error.instance().props.locationClick).toBeDefined();
    expect(typeof error.instance().props.locationClick).toEqual('function');
  });

  it('should render an h1 title element', () => {
    const error = shallow(<Error locationClick={() => {}} />);
    expect(error.find('h1').length).toEqual(1);
  });

  it('should render a Search element', () => {
    const error = shallow(<Error locationClick={() => {}} />);
    expect(error.find('Search').length).toEqual(1);
  });
});