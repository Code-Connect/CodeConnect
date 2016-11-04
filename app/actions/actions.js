import 'whatwg-fetch';

export function submitContactForm(name, email, message) {
    return (dispatch) => {
        dispatch({
            type: 'CLEAR_MESSAGES'
        });
        return fetch('/contact', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        }).then((response) => {
            if (response.ok) {
                return response.json().then((json) => {
                    dispatch({
                        type: 'CONTACT_FORM_SUCCESS',
                        messages: [json]
                    });
                });
            } else {
                return response.json().then((json) => {
                    dispatch({
                        type: 'CONTACT_FORM_FAILURE',
                        messages: Array.isArray(json) ? json : [json]
                    });
                });
            }
        });
    };
}

export function postRequest(body) {
    return (dispatch) => {
        fetch('/users', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Hubot',
                login: 'hubot',
            })
        }).then((response) => {
            dispatch({
                type: 'AJAX'
            });
        });
    };
}

export function getRequest() {
    return (dispatch) => {
        fetch('/test', {
            method: 'get'
        }).then((response) => {
            dispatch({
                type: 'GET'
            });
        });
    };
}
