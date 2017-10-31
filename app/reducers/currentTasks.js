export default function messages(state = {}, action) {
  switch (action.type) {
    case "GET_TASKS_SUCCESSFUL":
      console.log("action", action);
      //TODO das object action.tasks ist noch nicht ganz korrekt, aber es funst alles (halbwichtiger fehler)
      return Object.assign({}, action.tasks, {
        error: null,
        loading: false
      });
    case 'GET_TASKS_FAILURE':
      return {tasks: [], error: null, loading: true};
    case 'CLEAR_CURRENT_TASKS':
      return {tasks: [], error: null, loading: true};
    default:
      return state;
  }
}
