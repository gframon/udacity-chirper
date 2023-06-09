import { combineReducers } from 'redux';
import tweets from './tweets';
import authedUser from './authedUser';
import users from './users';
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({
  tweets,
  authedUser,
  users,
  loadingBar: loadingBarReducer,
});
