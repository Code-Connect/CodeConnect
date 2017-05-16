export default function modifyCode(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_TEXT':
      //still in progress
      var temp = state.mockData.map(function(item) {
        return item.task_id == action.task_id
          ? Object.assign(item, {
            [action.fieldtype]: action.newCode
          })
          : item;
      });
    default:
      return state;
  }
}
