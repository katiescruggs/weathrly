import React from 'react';
import {shallow, mount} from 'enzyme';
import Card from '../lib/Card';

describe('Card', () => {
  it('should render', () => {
    let card = shallow(<Card time="2:00" icon="" temp={[23]}/>);
    console.log(card);
  });
});