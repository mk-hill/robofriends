import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants.js';

import * as reducers from './reducers';
import * as actions from './actions';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: '',
  };

  it('should return initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, actions.setSearchField('abc'))
    ).toEqual({
      searchField: 'abc',
    });
  });
});

describe('requestRobots', () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
  };

  it('should return initial state', () => {
    expect(reducers.requestRobots()).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ robots: [], isPending: true });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{ id: '123', name: 'test', email: 'test@test.test' }],
      })
    ).toEqual({
      robots: [{ id: '123', name: 'test', email: 'test@test.test' }],
      isPending: false,
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: ':(',
      })
    ).toEqual({ robots: [], isPending: false, error: ':(' });
  });
});
