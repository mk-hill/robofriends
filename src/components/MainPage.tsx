import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import { IRobot } from '../containers/App';

import './MainPage.css';

interface IMainPageProps {
  searchField?: string;
  robots?: Array<IRobot>;
  isPending?: boolean;
  error?: string;
  onSearchChange?: any;
  onRequestRobots?: any;
}

class MainPage extends Component<IMainPageProps> {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter(robot =>
      robot.name
        ? robot.name.toLowerCase().includes(searchField.toLowerCase())
        : null
    );
  };

  render() {
    const { onSearchChange, isPending } = this.props;
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1 className="tc f1 mt5">Loading</h1>
          ) : (
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
