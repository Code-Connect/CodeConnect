import 'whatwg-fetch';

export function updateTask(task) {
  //TODO hier muss noch die richtige action gedispatcht werden
  return (dispatch) => {
    fetch('/updatetask', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin', // By default, fetch won't send any cookies to the server
      body: JSON.stringify({task: task})
    }).then((response) => {
      console.log("task");
      console.log(task);
      dispatch({type: 'UPDATE_TASK_SUCCESSFUL', task: task});
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
      credentials: 'same-origin', // By default, fetch won't send any cookies to the server
      body: JSON.stringify({name: name})
    }).then((response) => {
      return response.json().then(function(json) {
        dispatch({type: 'ADD_TASK_SUCCESSFUL', name: name, task_id: json.task_id});
      });
    });
  }
}

export function deleteTask(task) {
  return (dispatch) => {
    fetch('/deleteTask', {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin', // By default, fetch won't send any cookies to the server
      body: JSON.stringify({task_id: task.task_id})
    }).then((response) => {
      return response.json().then(function(json) {
        dispatch({type: 'DELETE_TASK_SUCCESSFUL', task_id: task.task_id});
      });
    })
  }
}
