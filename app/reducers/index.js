import { combineReducers } from 'redux';
import ajax from './ajax';
import messages from './messages';
import user from './user';

export default combineReducers({
  ajax,
  messages,
  user
});
