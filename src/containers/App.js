import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';

// import { robots } from '../robots';
// import './App.css';

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

  // componentDidMount() {
  //   this.props.onRequestRobots();
  // Earlier fetch call without redux:
  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(users => this.setState({ robots: users }));
  // Earlier local robots file without fetch:
  // this.setState({ robots: robots });
  // }

  // onSearchChange = e => {
  //   this.setState({ searchField: e.target.value });
  // };

  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
