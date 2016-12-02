export default function messages(state = {}, action) {
    switch (action.type) {
        case 'GET_REPOS':
            console.log("get repo reducer activated");
            console.log(action.repos);
            return {
                repos: action.repos
            }
            break;
        case 'ADD_PROJECT_TO_CC':
            console.log("projects added");
            return Object.assign({}, state, {
                ccrepos: action.project
            })
        default:
            return state;
    }
}
