import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrrorBoundry from '../components/ErrorBoundry';
import { robots } from '../robots';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ robots: users }));
    this.setState({ robots: robots });
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return !robots.length ? (
      <h1 className="tc f1 mt5">Loading RoboFriends</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
