export default function messages(state = {}, action) {
  switch (action.type) {
    case 'GET_PROJECT_SUCCESSFUL':
      return Object.assign({}, {
        project: action.project,
        error: null,
        loading: false
      });
    case 'GET_PROJECT_FAILURE':
      return {};
    case 'CLEAR_CURRENT_PROJECT':
      return {};
    default:
      return state;
  }
}
