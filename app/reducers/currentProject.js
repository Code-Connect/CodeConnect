export default function messages(state = {}, action) {
  switch (action.type) {
    case 'GET_PROJECT_SUCCESSFUL':
      return Object.assign({}, {
        project: action.project,
        error: null,
        isloading: false
      });
    case 'UPDATE_PROJECT_SUCCESSFUL':
      //TODO project soll nicht komplett ersetzt werden alle attribute sollen bleiben
      return Object.assign({}, {
        project: Object.assign(state.project, action.project),
        error: null,
        isloading: false
      });
    case 'GET_PROJECT_FAILURE':
    return Object.assign({},{project: {}, error: null, isloading: true});
    case 'CLEAR_CURRENT_PROJECT':
      return Object.assign({},{project: {}, error: null, isloading: true});
    default:
      return state;
  }
}
