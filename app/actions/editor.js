import 'whatwg-fetch';

export function updateText(text) {
  return (dispatch) => {
    dispatch({type: 'UPDATE_TEXT', text: text});
  }
}
