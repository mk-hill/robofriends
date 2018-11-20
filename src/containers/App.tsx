import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';

// import { robots } from '../robots';
// import './App.css';

import { setSearchField, requestRobots } from '../actions';

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

export interface IAppProps {
  robots: Array<IRobot>;
  searchField: string;
}

interface IAppState {
  // robots: Array<IRobot>;
  // searchField: string;
}

const mapStateToProps = (state: any) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>): void =>
      dispatch(setSearchField(event.currentTarget.value)),
    // onRequestRobots: () => requestRobots(dispatch),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component<IAppProps, IAppState> {
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

  render(): JSX.Element {
    return <MainPage {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
