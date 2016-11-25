export default function messages(state = {}, action) {
    switch (action.type) {
        case 'submitRepo':
            return {
                "nice": action.repoLink
            };
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
