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
              return {project_id: item.id, name: item.name, repourl: item.html_url, description: item.description, tasks: []}
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
    return fetch('https://api.github.com/users/'+ username +'/repos').then((response) => {
      return response.json().then(function(json) {
        var repoarray = json.map((item) => {
          return {project_id: item.id, name: item.name, repourl: item.html_url, description: item.description, tasks: []}
        });
        return dispatch({type: 'GET_REPOS_FROM_GITHUB', projects: repoarray});
      });
    });
  };
}

export function updateProject(project) {
  return (dispatch) => {
    return fetch('/updateproject', {
      method: 'post',
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
    return fetch('/deleteProject', {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin', // By default, fetch won't send any cookies to the server
      body: JSON.stringify({project_id: project_id})
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
