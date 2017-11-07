import React from 'react';
import {shallow, mount} from 'enzyme';
import Card from '../lib/Card';

describe('Card', () => {
  it('should exist', () => {
    const card = shallow(<Card time="2:00" icon="" temp={[23]}/>);
    expect(card).toBeDefined();
  });

  it('should render an h3 tag based on its time prop', () => {
    const card = shallow(<Card time="2:00" icon="" temp={[23]}/>);
    expect(card.find('h3').text()).toEqual('2:00');
  });

  it('should render an img with a src passed in to icon prop', () => {
    const card = shallow(<Card time="2:00" icon="test.jpg" temp={[25]}/>);
    expect(card.find('img').props().src).toEqual('test.jpg');
  })

  it('should render a p tag with the temperature if given one temp', () => {
    const card = shallow(<Card time="2:00" icon="" temp={[23]}/>);
    expect(card.find('p').text()).toEqual('23°');    
  });

  it('should render a p tag with the high and low if given two temps', () => {
    const card = shallow(<Card time="2:00" icon="" temp={[50, 25]}/>);
    expect(card.find('p').text()).toEqual('50°25°');
  });
});