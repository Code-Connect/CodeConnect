import 'whatwg-fetch';

export function getReposGithub(link) {
    return (dispatch) => {
        fetch(link).then((response) => {
            return response.json().then(function(json) {
                var array = json.map((item) => {
                    return {repoid: item.id, name: item.name, repourl: item.html_url, description: item.description}
                });
                return {type: 'GET_REPOS', repos: array};
            });
        }).then((action) => dispatch(action));
    };
}

export function addProjectsToCodeConnect(project) {
    return {type: 'ADD_PROJECT_TO_CC', project: project};
}

//AJAX Requests
export function postProject(ccrepos, github_id) {
    return (dispatch) => {
        fetch('/postccrepo', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ccrepos: ccrepos, github_id: github_id})
        }).then((response) => {
            dispatch({type: 'POST_CCREPOS'});
        });
    };
}

export function postTasksToProject(ccrepo_id, tasks, github_id) { //submit array of tasks to a project
    return (dispatch) => {
        fetch('/posttask', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ccrepo_id: ccrepo_id, tasks: tasks, github_id: github_id})
        }).then((response) => {
            dispatch({type: 'POST_TASK_TO'});
        });
    };
}
