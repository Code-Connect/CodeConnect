export default function messages(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_TEXT':
    //updates the text form the editor for the markdownpanel
      var temp = state.mockData.map(function(item) {
        return item.task_id == action.task_id
          ? Object.assign(item, {
            [action.fieldtype]: action.newCode
          })
          : item;
      });
      return Object.assign({}, state, {mockData: temp});

    default:
      return state;
  }
}
