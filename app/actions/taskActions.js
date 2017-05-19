import 'whatwg-fetch';

export function postTask(task_id, fieldtype, newCode) {
  //TODO hier muss noch die richtige action gedispatcht werden
  return (dispatch) => {
    fetch('/updatetask', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({task_id: task_id, fieldtype: fieldtype, newCode: newCode})
    }).then((response) => {
      dispatch({type: 'TASK_POST_SUCCESSFUL'});
    });
  };
}
