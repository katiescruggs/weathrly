import React from 'react';
import {shallow, mount} from 'enzyme';
import Header from '../lib/Header';

describe('Header', () => {
  it('should exist', () => {
    const header = shallow(<Header locationClick={() => {}} />);
    expect(header).toBeDefined();
  });

  it('should have a prop locationClick that is a function', () => {
    const header = shallow(<Header locationClick={() => {}} />);

    expect(header.instance().props.locationClick).toBeDefined();
    expect(typeof header.instance().props.locationClick).toEqual('function');
  });

  it('should render an h1 title element', () => {
    const header = shallow(<Header locationClick={() => {}} />);
    expect(header.find('h1').length).toEqual(1);
  });

  it('should render a Search element', () => {
    const header = shallow(<Header locationClick={() => {}} />);
    expect(header.find('Search').length).toEqual(1);
  });
});