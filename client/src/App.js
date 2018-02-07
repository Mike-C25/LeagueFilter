import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import API from './utils/API';

class App extends Component {
  state = {
    initialChampions: [],
    champions: [],
    users: [],
    searchTerm: "",
    position: ""
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));

    fetch('/champion')
      .then(res => res.json())
      .then(champList => this.setState({initialChampions: champList, champions: champList}));
    // API.getChampionData() .then(res => console.log(res)) .catch(err =>
    // console.log(err));

  }

  handleSearchInput = e => {
    const {name, value} = e.target;
    //filterChampion list
    const champions = this
      .state
      .initialChampions
      .filter(iC => iC.name.toLowerCase().includes(value));
    this.setState({[name]: value, champions: champions})
  };

  handleSelectInput = e => {
    e.preventDefault();
    const {value} = e.target;
    if (value !== "all") {
      const champions = this
        .state
        .initialChampions
        .filter(iC => iC.position.includes(value.toLowerCase()));
      this.setState({position: value, champions: champions});
    } else {
      this.setState({champions: this.state.initialChampions})
    }

  };

  render() {
    return (
      <div className="App">
        <h2 className="site-name">Champion Filter</h2>
        <div className="filter-container">
          <div className="search-container">
            <span className="s-icon"></span>
            <input
              className="c-search"
              type="search"
              onChange={this.handleSearchInput}
              value={this.state.searchTerm}
              name="searchTerm"
              placeholder="Filter Champions"/>
          </div>
          <div className="select-container">
            <span>Position:
            </span>
            <select
              className="position-select"
              value={this.state.position}
              onChange={this.handleSelectInput}>
              <option value="all">All</option>
              <option value="top">Top</option>
              <option value="middle">Middle</option>
              <option value="jungle">Jungle</option>
              <option value="bottom">Bottom</option>
              <option value="support">Support</option>
            </select>
          </div>
        </div>

        <div className="champlist">
          <h2>Select A Champion</h2>
          {this
            .state
            .champions
            .map(champions => <div className="champion-block" key={champions.id}>
              <div className="champion-text">
                <h2>{champions.name}</h2>
                <h4>{champions.title}</h4>
              </div>
            </div>)}
        </div>

      </div>
    );
  }
}

export default App;
