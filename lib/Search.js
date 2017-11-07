import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';
import cityArray from './cityArray.js';
import CompleteMe from '@katiescruggs/complete-me';

const cityTrie = new CompleteMe.Trie();
const sortedCities = cityArray.data.sort();

cityTrie.populate(sortedCities);

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.suggestionsArray = [];
    this.inputChange = this.inputChange.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.chooseSuggestion = this.chooseSuggestion.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.searchClick();
    }
  }

  //Function found on Stack Overflow by Greg Dean
  toTitleCase (str) {
    let result = '';

    str.replace(/\w\S*/g, function(txt) {
      if (result !== '') {
        result += ' ';
      }
      result += txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    result = result.split('');

    result[result.length - 1] = result[result.length - 1].toUpperCase();
    return result.join('');
  }

  render() {
    let placeholder;

    if (!localStorage.city) {
      placeholder = "City, ST or Zip Code";
    } else if (localStorage.state === 'undefined') {
      placeholder = localStorage.city;
    } else {
      placeholder = localStorage.city + ', ' + localStorage.state;
    }

    return (
      <div className="search">
          <input placeholder={placeholder} 
                 onChange={this.inputChange} 
                 value={this.state.value} 
                 onKeyDown={this.handleKeyPress}/>
          <button onClick ={this.searchClick}>Go</button>
          <ul className="suggestion-list"> {
              this.suggestionsArray.map((suggestion, index) => 
                <li key={index} onClick={this.chooseSuggestion}>
                  {this.toTitleCase(suggestion)}
                </li>)
            }
          </ul>
      </div>
    );
  }    
}

Search.propTypes = {
  locationClick: PropTypes.func
};