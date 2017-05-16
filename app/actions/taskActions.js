import 'whatwg-fetch';

export function postTask(task_id, fieldtype, value) {
  //TODO hier muss noch die richtige action gedispatcht werden
  return (dispatch) => {
    fetch('/updatetask', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({task_id: task_id, fieldtype: fieldtype, value: value})
    }).then((response) => {
      dispatch({type: 'AJAX'});
    });
  };
}
