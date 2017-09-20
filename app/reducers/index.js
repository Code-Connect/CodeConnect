import { combineReducers } from 'redux';
import user from './user';
import projects from './projects';
import tasks from './tasks';

export default combineReducers({
  user,
  projects
});
