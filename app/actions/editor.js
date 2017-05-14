import 'whatwg-fetch';

export function updateText(task_id, type, newCode) {
  return {type: 'UPDATE_TEXT', task_id: task_id, type: type, newCode: newCode};
}
