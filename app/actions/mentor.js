import 'whatwg-fetch';

// gets the github repos as array
// @param {string} githublink
export function getReposGithub(link) {
  return (dispatch) => {
    return fetch(link).then((response) => {
      return response.json().then(function(json) {
        var repoarray = json.map((item) => {
          return {project_id: item.id, name: item.name, repourl: item.html_url, description: item.description, tasks: []}
        });
        dispatch({type: 'GET_REPOS', repos: repoarray});
      });
    });
  };
}

// adds one imported projects to the Codeconnect local
// @param project:{ description:{string}, name:{string} project_id:{int}, repourl:{string}, tasks:[empty]}
export function addProjectsToCodeConnect(project) {
  return {type: 'ADD_PROJECT_TO_CC', project: project};
}

// adds the project to the database
// @param ccrepos: [{description:{string}, name:{string}, project_id:{int}, repourl:{string}, tasks: [{description:{string}, name:{string}, task_id:{int}}]}]
// @param userid from the github user
export function postProject(ccrepos, id) {
  return (dispatch) => {
    fetch('/postccrepo', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ccrepos: ccrepos, id: id})
    }).then((response) => {
      dispatch({type: 'POST_CCREPOS'});
    });
  };
}

// adds tasks to the project
// params ccrepo_id:{int}, task_id {description:{string}, name:{string}, task_id:{int}}, user_id:{int}
export function postTasksToProject(ccrepo_id, task, id) { //submit array of tasks to a project
  return (dispatch) => {
    fetch('/posttask', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ccrepo_id: ccrepo_id, taskwrapper: task, id: id})
    }).then((response) => {
      return response.json().then(function(json) {
        dispatch({type: 'POST_TASK_TO_PROJECT', ccrepo_id: ccrepo_id, 'addedTask': json});
      });
    });
  };
}
