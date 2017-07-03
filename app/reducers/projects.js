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
      var a = projects.addableProjects.concat(action.projects);
      var b = projects.addedProjects;

      a = a.filter(function(item, pos) {
        return a.indexOf(item) == pos;
      });

      a = a.filter(function(item) {
        return !(b.reduce(function(acc, val) {
          return (acc || (item.project_id == val.project_id))
        }, false))
      });

      return Object.assign({}, projects, {addableProjects: a});

    case 'ADD_PROJECT_SUCCESSFUL':
      var a = projects.addableProjects.filter((item) => item.project_id != action.project.project_id);
      console.log(a);
      return Object.assign({}, projects, {
        addableProjects: a,
        addedProjects: [
          ...projects.addedProjects,
          action.project
        ]
      });

    case 'ADD_TASK_SUCCESSFUL':
      // TODO task post successful feedback like a toast message
      var temp = projects.addedProjects.slice();
      temp = temp.map((item) => {
        if (item.project_id == action.project_id){
            return Object.assign({}, item, {
              tasks: [
                ...item.tasks,
                action.task_id
              ]
            })
        }
        else
          return item;
        }
      );
      console.log("temp");
      console.log(temp);
      return Object.assign({}, projects, {addedProjects: temp, tasks:
         [
          ...projects.tasks, {
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

    default:
      return projects;
  }
}
