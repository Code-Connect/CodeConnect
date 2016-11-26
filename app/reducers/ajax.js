export default function messages(state = {}, action) {
    switch (action.type) {
        case 'submitRepo':
            return Object.assign({}, state, {
                history: [...state.history, {
                    text: action.repoLink,
                    completed: false
                }]
            })
            break;
        case 'STATE_FROM_SERVER':
            return {
                history: [action.state]
            }
            break;
        case 'POST':
            return {
                khiem: "itworked"
            };
            break;
        case 'GET':
            return {
                get: "Get worked",
                response: action.text
            };
            break;
        default:
            return state;
    }
}
