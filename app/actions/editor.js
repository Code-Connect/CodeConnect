import 'whatwg-fetch';

export function updateText(task_id, fieldtype, newCode) {
  return {type: 'UPDATE_TEXT', task_id: task_id, fieldtype: fieldtype, newCode: newCode};
}
