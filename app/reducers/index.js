import { combineReducers } from 'redux';
import user from './user';
import projects from './projects';
import editor from './editor';

export default combineReducers({
  editor,
  user,
  projects
});
