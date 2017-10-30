export default function messages(state = {}, action) {
  switch (action.type) {
    case 'GET_PROJECT_LIST_SUCCESSFUL':
      return Object.assign({}, state, {
        projectList: action.projectList,
        error: null,
        loading: false
      });
    case 'CLEAR_PROJECT_LIST':
      return {projectList: [], error: null, loading: true};
    case 'GET_PROJECT_LIST_ERROR':
      return {projectList: [], error: null, loading: true};
    case 'GET_GITREPOS_SUCCESSFUL':
      return Object.assign({}, {
        projectList: action.projectList,
        addableProjects: action.githubRepos,
        error: null,
        loading: false
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
        loading: false
      });
    default:
      return state;
  }
}
