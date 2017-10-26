import { combineReducers } from 'redux';
import user from './user';
import projects from './projects';
import currentProject from './currentProject';
import publicProjects from './publicProjects';


export default combineReducers({
  user,
  projects,
  publicProjects,
  currentProject
});
