import { combineReducers } from 'redux';
import user from './user';
import projects from './projects';
import tasks from './tasks';
import messages from './messages';


export default combineReducers({
  user,
  projects,
  tasks,
  messages
});
