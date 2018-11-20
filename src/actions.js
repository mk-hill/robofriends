import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

// Using redux-thunk to invoke returned function with dispatch
// Redux out of the box appears to expect actions to return objects only
export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(usersData =>
      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: usersData })
    )
    .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }));
};
