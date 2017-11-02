import React from 'react';
import {shallow, mount} from 'enzyme';
import Card from '../lib/Card';

describe('Card', () => {
  it('should render', () => {
    const card = shallow(<Card />);
    console.log(card);
  });
});