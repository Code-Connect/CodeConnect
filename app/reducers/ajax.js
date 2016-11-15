export default function messages(state = {}, action) {
    switch (action.type) {
        case 'AJAX':
            return {
                thiensen: "oida"
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
