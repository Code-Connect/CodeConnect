import 'whatwg-fetch';

export function updateText(task_id, field, newCode) {
  return {type: 'UPDATE_TEXT', task_id: task_id, field: field, newCode: newCode};
}
