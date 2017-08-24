//converts projects into taskdict
exports.createTaskDict = function(tasks) {
  console.log("normalize");
  return tasks.reduce((acc, item) => {
    return Object.assign(acc, {
      [item.task_id]: item
    })
  }, {})
}

//converts projects into projectdict
exports.createProjectDict = function(projects) {
  console.log("normalize project");
  return projects.reduce((acc, item) => {
    return Object.assign(acc, {
      [item.project_id]: item
    })
  }, {})
}

//coverts projects into array with IDs
exports.getAddedProjects = function(projects) {
  var test = projects.map((item) => {
    return item.project_id;
  });
  console.log(test);
  return test;
}
