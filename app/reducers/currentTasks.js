export default function messages(state = {}, action) {
  switch (action.type) {
    case "GET_TASKS_SUCCESSFUL":
      console.log("action", action);
      return Object.assign({}, action.tasks, {
        error: null,
        loading: false
      });
    case "GET_TASKS_FAILURE":
      console.log("action", action);
      return {};
    default:
      return state;
  }
}
