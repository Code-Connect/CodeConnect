export default function messages(state = {}, action) {
  switch (action.type) {
    case 'GET_PROJECT_LIST_SUCCESSFUL':
      return Object.assign({}, {
        projectList: action.projectList,
        error: null,
        loading: false
      });
    case 'CLEAR_PROJECT_LIST':
      return {projectList: [], error: null, loading: true};
    case 'GET_PROJECT_LIST_ERROR':
      return {projectList: [], error: null, loading: true};
    default:
      return state;
  }
}
