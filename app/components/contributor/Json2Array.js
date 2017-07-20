export function json2array(json) {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function (key) {
        result.push(json[key]);
    });
    return result;
}

export function getTaskIDs(projectID, projects) {
    var query = require('json-query')
    var taskArray = query('projects[project_id=' + projectID + '].tasks', {
        data: {
            projects: projects
        }
    }).value;
    return taskArray === null ? new Array() : taskArray;
}

export function getProjectByID(id, projectArray) {
    return projectArray.find(
        (item) => {
            return item.project_id == id;
        }
    )
}

export function getTasksFromIDs(idArray, taskArray) {
    return idArray.map((id) => {
        return taskArray[id];
    })
}

export function getTasksFromProjectID(projectID, projects, tasks) {
    var temp = getTaskIDs(projectID, projects);
    return getTasksFromIDs(temp, tasks);
}