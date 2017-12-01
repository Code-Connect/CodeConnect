import { combineReducers } from 'redux';
import user from './user';
import currentProject from './currentProject';
import currentTasks from './currentTasks';
import currentProjectList from './currentProjectList';


export default combineReducers({
  user,
  currentProjectList,
  currentTasks,
  currentProject
});
