export default function messages(state = {}, action) {
  switch (action.type) {
    case 'GET_PROJECT_LIST_SUCCESSFUL':
      return Object.assign({}, state, {
        projectList: action.projectList,
        error: null,
        isloading: false
      });
    case 'CLEAR_PROJECT_LIST':
      return {projectList: [], error: null, isloading: true};
    case 'GET_PROJECT_LIST_ERROR':
      return {projectList: [], error: null, isloading: true};
    case 'GET_GITREPOS_SUCCESSFUL':
      return Object.assign({}, {
        projectList: action.projectList,
        addableProjects: action.githubRepos,
        error: null,
        isloading: false
      });
    case 'ADD_PROJECT_SUCCESSFUL':
      var a = state.addableProjects.filter((item) => item.project_id != action.project.project_id);
      return Object.assign({}, {
        projectList: [
          ...state.projectList,
          action.project
        ],
        addableProjects: a,
        error: null,
        isloading: false
      });
    default:
      return state;
  }
}
