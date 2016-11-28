export default function messages(state = {}, action) {
    switch (action.type) {
        case 'GET_REPOS':
            console.log("get repo reducer activated");
            console.log(action.repos);
            return {
                repos: action.repos
            }
            break;
        default:
            return state;
    }
}
