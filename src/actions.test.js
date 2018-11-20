import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants.js';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import * as actions from './actions';

const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
  it('should return object with given text', () => {
    const text = 'aliens';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text,
    };

    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe('requestRobots', () => {
  it('should handle requesting robots from API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();

    const expectedAction = { type: REQUEST_ROBOTS_PENDING };
    expect(action[0]).toEqual(expectedAction);
  });
});
