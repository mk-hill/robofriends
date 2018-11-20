// Unused component, added for testing purposes only

import React, { Component } from 'react';

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  updateCount = () => {
    // this.setState({ count: this.state.count + 1 });
    // State updates asynchronous, code above could cause errors
    // Grabbing state first instead
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };
  render() {
    return (
      <button id="counter" color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
