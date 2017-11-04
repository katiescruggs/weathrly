import React from 'react';
import './Search.scss';
import cityArray from './cityArray.js';
import CompleteMe from '@katiescruggs/complete-me';

const cityTrie = new CompleteMe.Trie();
const sortedCities = cityArray.data.sort();
cityTrie.populate(sortedCities);

export default class Search extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: ''
    };

    this.inputChange = this.inputChange.bind(this);
    this.searchClick = this.searchClick.bind(this);
  }

  inputChange(e) {
    this.setState({value: (e.target.value)});
    if(e.target.value.length >= 3) {
      console.log(cityTrie.suggest(e.target.value.toLowerCase()));
    } 
  }

  searchClick() {
    let cityState = this.state.value.split(', ')          
    localStorage.setItem('city', cityState[0]);
    localStorage.setItem('state', cityState[1]);
    this.props.locationClick();
  }

  render() {
    let placeholder;
    if (!localStorage.city) {
      placeholder = "Enter a location.";
    } else if (localStorage.state === 'undefined') {
      placeholder = localStorage.city;
    } else {
      placeholder = localStorage.city + ', ' + localStorage.state;
    }

    return (
      <div className="search">
          <input placeholder={placeholder} onChange={this.inputChange} />
          <button onClick ={this.searchClick}>Search</button>
      </div>
    )
  }    
}