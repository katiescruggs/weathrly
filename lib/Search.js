import React from 'react';
import './Search.scss';

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
            onChange={(e) => this.setState({value: (e.target.value).split(', ')}) } />
          <button 
            onClick ={() => {              
              localStorage.setItem('city', this.state.value[0]);
              localStorage.setItem('state', this.state.value[1]);
              this.props.locationClick();
              }
            } 
          >Search</button>
      </div>
    )
  }    
}