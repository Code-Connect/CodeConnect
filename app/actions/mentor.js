import 'whatwg-fetch';

export function submitRepo(repoLink) {
    return (dispatch) => {
        fetch('/submitrepo', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                repo: repoLink,
            })
        }).then((response) => {
            dispatch({
                type: 'submitRepo',
                repoLink: 'link123'
            });
        });
    };
}
