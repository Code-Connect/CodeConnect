import { combineReducers } from 'redux';
import user from './user';
import projects from './projects';
import editor from './editor';
import tasks from './tasks';

export default combineReducers({
  editor,
  user,
  projects,
  tasks
});
