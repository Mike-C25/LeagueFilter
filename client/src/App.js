import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/API';

class App extends Component {
  state = {
    initialChampions: [],
    champions: [],
    users: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));

    fetch('/champion')
      .then(res => res.json())
      .then(champList => this.setState({ initialChampions: champList,
      champions: champList}));
    // API.getChampionData() .then(res => console.log(res)) .catch(err =>
    // console.log(err));

  }

  handleSearchInput = e => {
    const { name, value } = e.target;
    //filterChampion list
    const champions = this.state.initialChampions.filter( iC => iC.name.toLowerCase().includes(value));
    this.setState({
      [name]: value,
      champions: champions
    })
  }
  

  render() {
    return (
      <div className="App">
        <h2>Champion Filter</h2>
        <span className="s-icon"></span><input className="c-search" type="search" onChange={this.handleSearchInput} value={this.state.searchTerm} name="searchTerm" placeholder="Filter Champions" />
        <h1>Select A Champion</h1>
        {this
          .state
          .champions
          .map(champions => 
            <div className="champion-block" key={champions.id}>
              <div className="champion-text">
                <h2>{champions.name}</h2>
                <h4>{champions.title}</h4>
              </div>
            </div>)}
      </div>
    );
  }
}

export default App;
