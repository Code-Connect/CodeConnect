import { combineReducers } from 'redux';
import user from './user';
import projects from './projects';
import currentProject from './currentProject';
import publicProjects from './publicProjects';
import messages from './messages';


export default combineReducers({
  user,
  projects,
  messages,
  publicProjects,
  currentProject
});
