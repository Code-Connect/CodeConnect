export default function messages(tasks = {}, action) {
  switch (action.type) {
    case 'UPDATE_ATTRIBUTE':
      //updates the text form the editor for the markdownpanel
      var temp = tasks.mockData.map(function(item) {
        return item.task_id == action.task_id
          ? Object.assign(item, {
            [action.fieldtype]: action.newCode
          })
          : item;
      });
      return Object.assign({}, tasks, {mockData: temp});

    case 'ADD_TASK_SUCCESSFUL':
      // TODO task post successful feedback like a toast message
      return Object.assign({}, tasks, {
        mockData: [
          ...tasks.mockData, {
            name: action.name,
            task_id: action.task_id,
            input: "Add input",
            output: "Add output",
            description: "Add description",
            attempts: 0,
            difficulty: "NA",
            tags: []
          }
        ]
      });

    case 'DELETE_TASK_SUCCESSFUL':
      return Object.assign({}, tasks, {
        mockData: tasks.mockData.filter((item) => item.task_id !== action.task_id)
      })

    default:
      return tasks;
  }
}
