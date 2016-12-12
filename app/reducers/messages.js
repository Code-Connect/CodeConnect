export default function messages(state = {}, action) {
  switch (action.type) {
    case 'TOGGLE_PANEL':
      return {
        toggle: !state.toggle
      };
    case 'INIT_TOGGLE':
      return {
        toggle: false
      };
    case 'CLEAR_MESSAGES':
      return {};
    default:
      return state;
  }
}
