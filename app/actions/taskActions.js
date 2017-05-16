import 'whatwg-fetch';

export function postTask(body) {
  //TODO hier muss noch die richtige action gedispatcht werden
    return (dispatch) => {
        fetch('/updatetask', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((response) => {
            dispatch({type: 'AJAX'});
        });
    };
}
