export default function messages(state = {}, action) {
  switch (action.type) {
    case "GET_TASKS_SUCCESSFUL":
      //TODO das object action.tasks ist noch nicht ganz korrekt, aber es funst alles (halbwichtiger fehler)
      return Object.assign({}, action.tasks, {
        error: null,
        isloading: false
      });
    case 'GET_TASKS_FAILURE':
      return {tasks: [], error: null, isloading: true};
    case 'CLEAR_CURRENT_TASKS':
      return {tasks: [], error: null, isloading: true};
    case 'ADD_TASK_SUCCESSFUL':
      return {
        tasks: [
          ...state.tasks,
          action.task
        ],
        error: null,
        isloading: false
      };
    case 'UPDATE_TASK_SUCCESSFUL':
      var a = state.tasks.map((task) => {
        if (task.task_id == action.task.task_id)
          return Object.assign(task, action.task);
        else
          return task;
        }
      );
      return Object.assign({}, {
        tasks: a,
        error: null,
        isloading: false
      });
    case 'DELETE_TASK_SUCCESSFUL':
      //TODO hier einfach nochmal das aus dem state löschen
      var a = state.tasks.filter((task) => {
        return (task.task_id != action.task_id);
      });
      return Object.assign({}, {
        tasks: a,
        error: null,
        isloading: false
      });
    default:
      return state;
  }
}
