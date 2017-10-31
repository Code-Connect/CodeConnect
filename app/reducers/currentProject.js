export default function messages(state = {}, action) {
  switch (action.type) {
    case 'GET_PROJECT_SUCCESSFUL':
      return Object.assign({}, {
        project: action.project,
        error: null,
        loading: false
      });
    case 'UPDATE_PROJECT_SUCCESSFUL':
      //TODO project soll nicht komplett ersetzt werden alle attribute sollen bleiben
      return Object.assign({}, {
        project: Object.assign(state.project, action.project),
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
