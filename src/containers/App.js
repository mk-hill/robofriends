import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrrorBoundry from '../components/ErrorBoundry';
// import { robots } from '../robots';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    // onRequestRobots: () => requestRobots(dispatch),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  // Constructor no longer required, robots received as props
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     // searchField: '',
  //   };
  // }

  componentDidMount() {
    this.props.onRequestRobots();
    // Earlier fetch call without redux:
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ robots: users }));
    // Earlier local robots file without fetch:
    // this.setState({ robots: robots });
  }

  // onSearchChange = e => {
  //   this.setState({ searchField: e.target.value });
  // };

  render() {
    // const { robots, searchField } = this.state;
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return isPending ? (
      <h1 className="tc f1 mt5">Loading RoboFriends</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        {/* <SearchBox searchChange={this.onSearchChange} /> */}
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
