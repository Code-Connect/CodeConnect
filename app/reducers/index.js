import { combineReducers } from 'redux';
import ajax from './ajax';
import messages from './messages';

export default combineReducers({
  ajax,
  messages
});
