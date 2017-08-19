//converts the current state format into a different one, which can be handled by components s

exports.getAddedProjects = function(state){
  return state.projects.addedProjects.map((id) => {
    return state.projects.projects[id];
  });
}
