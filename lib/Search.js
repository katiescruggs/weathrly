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
  }

  render() {
    return (
      <div className="search">
          <input 
            placeholder={localStorage.city + ', ' + localStorage.state}
            onChange={(e) => {
              this.setState({value: (e.target.value)});
              if(this.state.value.length > 2) {
                console.log(cityTrie.suggest(this.state.value));
              }
            } 
          } />
          <button 
            onClick ={() => {
              let cityState = this.state.value.split(', ')          
              localStorage.setItem('city', cityState[0]);
              localStorage.setItem('state', cityState[1]);
              this.props.locationClick();
              }
            } 
          >Search</button>
      </div>
    )
  }    
}