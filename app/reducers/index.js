import { combineReducers } from 'redux';
import user from './user';
import projects from './projects';
import currentProject from './currentProject';
import currentTasks from './currentTasks';
import currentProjectList from './currentProjectList';
import messages from './messages';


export default combineReducers({
  user,
  projects,
  messages,
  currentProjectList,
  currentTasks,
  currentProject
});
