export default function messages(state = {}, action) {
  switch (action.type) {
    case 'CLEAR_PROJECT_LIST':
      return Object.assign({}, {
        projectList: action.projectList,
        error: null,
        loading: false
      });
    case 'GET_PROJECT_LIST_SUCCESSFUL':
      return {projectList: [], error: null, loading: true};
    case 'GET_PROJECT_LIST_ERROR':
      return {projectList: [], error: null, loading: true};
    default:
      return state;
  }
}
