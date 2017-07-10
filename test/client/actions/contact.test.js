import 'isomorphic-fetch'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {expect} from 'chai';
import {assert} from 'chai';
import * as actions from '../../../app/actions/mentor';
import reducer from '../../../app/reducers/tasks'
import reducerProject from '../../../app/reducers/projects'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('projects', () => {

  it('added projects successful', () => {

    expect(reducerProject({
      addableProjects: [
        {
          name: "name1",
          project_id: 1
        }, {
          name: "name2",
          project_id: 2
        }
      ],
      addedProjects: []
    }, {
      type: 'ADD_PROJECT_SUCCESSFUL',
      project: {
        name: "name2",
        project_id: 2
      }
    })).to.deep.equal({
      addableProjects: [
        {
          name: "name1",
          project_id: 1
        }
      ],
      addedProjects: [
        {
          name: "name2",
          project_id: 2
        }
      ]
    });
  });

});

describe('tasks ', () => {
  it('test action for adding task', () => {
    expect(reducerProject({
      addedProjects: [
        {
          name: "name1",
          project_id: 1,
          tasks: [
            {
              name: "name2",
              task_id: 2,
              input: "Add input",
              output: "Add output",
              description: "Add description",
              attempts: 0,
              difficulty: "NA",
              tags: []
            }
          ]
        }
      ]
    }, {
      type: 'ADD_TASK_SUCCESSFUL',
      task_id: 10,
      name: "name10",
      project_id: 1
    })).to.deep.equal({
      addedProjects: [
        {
          name: "name1",
          project_id: 1,
          tasks: [
            {
              name: "name2",
              task_id: 2,
              input: "Add input",
              output: "Add output",
              description: "Add description",
              attempts: 0,
              difficulty: "NA",
              tags: []
            }, {
              name: "name10",
              task_id: 10,
              input: "Add input",
              output: "Add output",
              description: "Add description",
              attempts: 0,
              difficulty: "NA",
              tags: []
            }
          ]
        }
      ]
    });
  });
});
