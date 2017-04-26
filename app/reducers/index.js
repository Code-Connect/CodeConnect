import { combineReducers } from 'redux';
import user from './user';
import projects from './projects';

export default combineReducers({
  user,
  projects
});
