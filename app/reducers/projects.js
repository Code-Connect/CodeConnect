export default function messages(state = {}, action) {
  switch (action.type) {
    case 'GET_REPOS':
      var temp = action.repos.filter((item) => state.tasks.reduce(function(acc, item2) {
        return acc || (JSON.stringify(item.project_id) === JSON.stringify(item2.project_id))
      }, false));

      temp.map((item) => {
        state.tasks.map((item2) => {
          if (JSON.stringify(item2.name) != null && JSON.stringify(item.project_id) === JSON.stringify(item2.project_id)) {
            //delete item2.project_id;
            item.tasks.push(item2);
          }
        });
      });

      return Object.assign({}, state, {
        ccrepos: temp,
        repos: action.repos.filter((item) => temp.reduce(function(acc, item2) {
          return acc && (JSON.stringify(item.project_id) !== JSON.stringify(item2.project_id))
        }, true))
      });

    case 'ADD_PROJECT_TO_CC':
      //state is state.projects
      return Object.assign({}, state, {
        repos: state.repos.filter((item) => item.name !== action.project.name),
        ccrepos: [
          ...state.ccrepos,
          action.project
        ]
      });

    case 'POST_TASK_TO_PROJECT':
      var newCCrepos = state.ccrepos.map((item) => {
        if (item.project_id == action.ccrepo_id) {
          var temp = item;
          temp.tasks.push(action.addedTask);
          return temp;
        }
        return item
      });
      return Object.assign({}, state, {ccrepos: newCCrepos});

    case 'GET_REPOS_FROM_GITHUB':
    
    default:
      return state;
  }
}
