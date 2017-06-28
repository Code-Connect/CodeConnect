export default function messages(projects = {}, action) {
  switch (action.type) {
    case 'GET_REPOS':
      var temp = action.repos.filter((item) => projects.tasks.reduce(function(acc, item2) {
        return acc || (JSON.stringify(item.project_id) === JSON.stringify(item2.project_id))
      }, false));

      temp.map((item) => {
        projects.tasks.map((item2) => {
          if (JSON.stringify(item2.name) != null && JSON.stringify(item.project_id) === JSON.stringify(item2.project_id)) {
            //delete item2.project_id;
            item.tasks.push(item2);
          }
        });
      });

      return Object.assign({}, projects, {
        ccrepos: temp,
        repos: action.repos.filter((item) => temp.reduce(function(acc, item2) {
          return acc && (JSON.stringify(item.project_id) !== JSON.stringify(item2.project_id))
        }, true))
      });

    case 'ADD_PROJECT_TO_CC':
      //projects is projects.projects
      return Object.assign({}, projects, {
        repos: projects.repos.filter((item) => item.name !== action.project.name),
        ccrepos: [
          ...projects.ccrepos,
          action.project
        ]
      });

    case 'POST_TASK_TO_PROJECT':
      var newCCrepos = projects.ccrepos.map((item) => {
        if (item.project_id == action.ccrepo_id) {
          var temp = item;
          temp.tasks.push(action.addedTask);
          return temp;
        }
        return item
      });
      return Object.assign({}, projects, {ccrepos: newCCrepos});

    case 'GET_REPOS_FROM_GITHUB':
      var a = projects.addAbleProjects.concat(action.projects);

      for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
          if (a[i].project_id == a[j].project_id)
            a.splice(j--, 1);
          }
        }

      return Object.assign({}, projects, {addAbleProjects: a});

    case 'ADD_PROJECT_SUCCESSFUL':
      var a = projects.addAbleProjects.filter((item) => item.project_id != action.project.project_id);
      console.log(a);
      return Object.assign({}, projects, {
        addAbleProjects: a,
        addedProjects: [
          ...projects.addedProjects,
          action.project
        ]
      })
    default:
      return projects;
  }
}
