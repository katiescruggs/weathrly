import React from 'react';
import {shallow, mount} from 'enzyme';
import Search from '../lib/Search';

global.localStorage = {
  setItem(keyword, value) {
    global.localStorage[keyword] = value;
  },
  clear() {
    global.localStorage = {
      setItem(keyword, value) {
        global.localStorage[keyword] = value;
      }
    };
  }
}

describe('Search', () => {
  it('should exist', () => {
    const search = shallow(<Search />);
    expect(search).toBeDefined();
  });

  it('should have a default state with a key of value set to empty string', () => {
    const search = shallow(<Search locationClick ={() => {}} />);
    expect(search.state().value).toEqual('');
  });

  it('should have an empty suggestionsArray', () => {
    const search = shallow(<Search locationClick={() => {}} />);
    expect(search.instance().suggestionsArray).toEqual([]);
  });

  it('should have an inputChange, searchClick, chooseSuggestion, and handleKeyPress methods', () => {
    const search = shallow(<Search locationClick={() => {}} />);
    expect(typeof search.instance().inputChange).toEqual('function');
    expect(typeof search.instance().searchClick).toEqual('function');
    expect(typeof search.instance().chooseSuggestion).toEqual('function');
    expect(typeof search.instance().handleKeyPress).toEqual('function');
  });

  it('should take in a function locationClick as a property', () => {
    const search = shallow(<Search locationClick={() => {}} />);
    expect(typeof search.instance().props.locationClick).toEqual('function');
  });

  it('should have an input placeholder that starts with "City, ST or Zip Code"', () => {
    const search = shallow(<Search locationClick={() => {}} />);
    const inputPlaceholder = search.find('input').props().placeholder;
    expect(inputPlaceholder).toEqual('City, ST or Zip Code');
  });

  it('should change the input placeholder to zip code if the zip code is in localStorage', () => {
    localStorage.setItem('city', '80209');
    
    const search = shallow(<Search locationClick={() => {}} />);
    const inputPlaceholder = search.find('input').props().placeholder;

    expect(inputPlaceholder).toEqual('80209');

  });

  it('should change the input placeholder to location if city, state are in localStorage', () => {
    localStorage.setItem('city', 'Denver');
    localStorage.setItem('state', 'CO');

    const search = shallow(<Search locationClick={() => {}} />);
    const inputPlaceholder = search.find('input').props().placeholder;

    expect(inputPlaceholder).toEqual('Denver, CO');
  });

  it('should have a button', () => {
    const search = shallow(<Search locationClick={() => {}} />);
    expect(search.find('button').length).toEqual(1);
  });

  it('should have an unordered list to house suggestions', () => {
    const search = shallow(<Search locationClick={() => {}} />);
    expect(search.find('ul').length).toEqual(1);
  });

  it('should change update localStorage on click', () => {
    localStorage.clear();

    const search = shallow(<Search locationClick={() => {}} />);
    search.state().value = 'Denver, CO';
    expect(localStorage.city).toEqual(undefined);
    expect(localStorage.state).toEqual(undefined);

    search.children('button').simulate('click');
    expect(localStorage.city).toEqual('Denver');
    expect(localStorage.state).toEqual('CO');
  });
});