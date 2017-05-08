export default function modifyCode(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return Object.assign({}, state, {text: action.text});
    default:
      return state;
  }
}
