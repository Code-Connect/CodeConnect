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
    default:
      return state;
  }
}
