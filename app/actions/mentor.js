import 'whatwg-fetch';

export function getRequest(link) {
    return (dispatch) => {
        fetch(link).then((response) => {
            return response.json().then(function(json) {
                var array = json.map((item) => {
                    return {
                        name: item.name,
                        repourl: item.html_url,
                        description: item.description
                    }
                });
                console.log("check");
                return {
                    type: 'GET_REPOS',
                    repos: array
                };
            });
        }).then((action) => dispatch(action));
    };
}
