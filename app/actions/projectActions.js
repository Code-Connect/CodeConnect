import 'whatwg-fetch';

// gets the github repos as array
// @param {string} githublink
export function getOrgsProject(token) {
  return (dispatch) => {
    return fetch('https://api.github.com/user/orgs', {
      method: 'get',
      headers: {
        'Authorization': 'token ' + token
      }
    }).then((response) => {
      return response.json().then(function(orgs) {
        var repoarray = [];
        Promise.all(orgs.map((item) => {
          return fetch(item.repos_url).then((response2) => {
            return response2.json().then((repo) => {
              return repo;
            })
          }).then((repos) => {
            var repoarray = repos.map((item) => {
              return {
                project_id: item.id,
                name: item.name,
                repourl: item.html_url,
                description: item.description,
                tasks: [],
                follower: 0,
                image: 'https://avatars1.githubusercontent.com/u/23557789?s=200&v=4'
              }
            });
            return dispatch({type: 'GET_REPOS_FROM_GITHUB', projects: repoarray});
          });
        }));
      });
    });
  };
}

export function getUserProject(token, username) {
  return (dispatch) => {
    return fetch('https://api.github.com/users/' + username + '/repos').then((response) => {
      return response.json().then(function(json) {
        var repoarray = json.map((item) => {
          return {
            project_id: item.id,
            name: item.name,
            repourl: item.html_url,
            description: item.description,
            tasks: [],
            follower: 0,
            image: 'https://avatars1.githubusercontent.com/u/23557789?s=200&v=4'
          }
        });
        return dispatch({type: 'GET_REPOS_FROM_GITHUB', projects: repoarray});
      });
    });
  };
}

export function updateProject(project) {
  return (dispatch) => {
    return fetch('/projects/' + project.project_id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin', // By default, fetch won't send any cookies to the server
      body: JSON.stringify({project: project})
    }).then((response) => {
      return dispatch({type: 'UPDATE_PROJECT_SUCCESSFUL', project: project});
    });
  };
}

export function deleteProject(project_id) {
  return (dispatch) => {
    return fetch('/projects/' + project_id, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin' // By default, fetch won't send any cookies to the server
      // body: JSON.stringify({project_id: project_id})
    }).then((response) => {
      return response.json().then(function(json) {
        return dispatch({type: 'DELETE_PROJECT_SUCCESSFUL', project_id: project_id});
      });
    })
  }
}

export function addProject(project) {
  return (dispatch) => {
    return fetch('/projects', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin', // By default, fetch won't send any cookies to the server
      body: JSON.stringify(project)
    }).then((response) => {
      return response.json().then(function(json) {
        return dispatch({type: 'ADD_PROJECT_SUCCESSFUL', project: project});
      });
    });
  }
}

export function getProject(project_id) {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_PROJECT'
    });
    return fetch('/projects/' + project_id, {
      credentials: 'same-origin' // By default, fetch won't send any cookies to the server
    }).then((response) => {
      // is response.ok was vorgefertigtes?
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: 'GET_PROJECT_SUCCESSFUL',
            project: json
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: 'GET_PROJECT_FAILURE',
            project: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}
