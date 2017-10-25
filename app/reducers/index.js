import { combineReducers } from 'redux';
import user from './user';
import projects from './projects';
import messages from './messages';
import currentProject from './currentProject';


export default combineReducers({
  user,
  projects,
  messages,
  currentProject
});
