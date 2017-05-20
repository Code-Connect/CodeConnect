import 'whatwg-fetch';

export function updateTask(task_id, fieldtype, newCode) {
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
      dispatch({type: 'UPDATE_TASK_SUCCESSFUL'});
    });
  };
}

export function addTask(name) {
  return (dispatch) => {
    fetch('/addtask', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name})
    }).then((response) => {
      return response.json().then(function(json) {
        console.log("json: ")
        console.log(json);
        dispatch({type: 'ADD_TASK_SUCCESSFUL', name: name, task_id: json.task_id});
      });
    });
  }
}
