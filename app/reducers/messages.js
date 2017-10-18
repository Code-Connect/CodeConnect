export default function messages(state = {}, action) {
  switch (action.type) {
    case 'CLEAR_HEADER':
      return {};
    default:
      return state;
  }
}
