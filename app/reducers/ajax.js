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
        default:
            return state;
    }
}
