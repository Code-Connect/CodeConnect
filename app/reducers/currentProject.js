export default function messages(state = {}, action) {
  switch (action.type) {
    case 'GET_PROJECT_SUCCESSFUL':
      return Object.assign({}, {
        project: action.project,
        error: null,
        loading: false
      });
    case 'GET_PROJECT_FAILURE':
      return {project: {}, error: null, loading: true};
    case 'CLEAR_CURRENT_PROJECT':
      return {project: {}, error: null, loading: true};
    default:
      return state;
  }
}
