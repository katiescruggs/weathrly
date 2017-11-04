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
    this.suggestionsArray = [];

    this.inputChange = this.inputChange.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.chooseSuggestion = this.chooseSuggestion.bind(this);
  }

  inputChange(e) {
    this.setState({value: (e.target.value)});
    if (e.target.value.length >= 3) {
      this.suggestionsArray = cityTrie.suggest(e.target.value.toLowerCase());
    } else {
      this.suggestionsArray = [];
    }
  }

  searchClick() {
    let cityState = this.state.value.split(', ');
    localStorage.setItem('city', cityState[0]);
    localStorage.setItem('state', cityState[1]);
    this.props.locationClick();
  }

  chooseSuggestion(e) {
    let cityState = e.target.innerHTML.split(', ');
    this.setState({value: e.target.innerHTML});
    localStorage.setItem('city', cityState[0]);
    localStorage.setItem('state', cityState[1]);
    this.suggestionsArray = [];
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
          <input placeholder={placeholder} onChange={this.inputChange} value={this.state.value}/>
          <button onClick ={this.searchClick}>Search</button>
          <ul className="suggestion-list">
            {this.suggestionsArray.map(suggestion => 
              <li onClick={this.chooseSuggestion}>{suggestion}</li>)
            }
          </ul>
      </div>
    )
  }    
}