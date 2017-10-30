export default function messages(projects = {}, action) {
  switch (action.type) {

    case 'GET_REPOS_FROM_GITHUB':
      var a = projects.addableProjects.concat(action.projects);
      var b = projects.addedProjects;

      //filter duplicates
      a = a.filter((item, index, self) => self.findIndex((t) => {
        return t.project_id === item.project_id
      }) === index)

      //filter already added projects from the list
      a = a.filter(function(item) {
        return !(b.reduce(function(acc, val) {
          return (acc || (item.project_id == val))
        }, false))
      });

      return Object.assign({}, projects, {addableProjects: a});

    // case 'ADD_PROJECT_SUCCESSFUL':
    //   var a = projects.addableProjects.filter((item) => item.project_id != action.project.project_id);
    //   return Object.assign({}, projects, {
    //     addableProjects: a,
    //     addedProjects: [
    //       ...projects.addedProjects,
    //       action.project.project_id
    //     ],
    //     publicProjects: [
    //       ...projects.publicProjects,
    //       action.project.project_id
    //     ],
    //     projectDict: Object.assign({}, projects.projectDict, {
    //       [action.project.project_id]: action.project
    //     })
    //   });

    case 'UPDATE_PROJECT_SUCCESSFUL':
      //TODO hier muss diese methode fertig gemacht werden
      var index = action.project.project_id;
      var newAttribute = Object.assign({}, projects.projectDict, {
        [index]: Object.assign(projects.projectDict[index], action.project)
      });
      return Object.assign({}, projects, {projectDict: newAttribute});

    case 'DELETE_PROJECT_SUCCESSFUL':
      //TODO task werden noch nicht gelöscht nur die Projects
      var temp = projects.addedProjects.slice();
      temp = temp.filter((project) => {
        return action.project_id != project
      });

      var temp2 = Object.assign({}, projects.projectDict);
      delete temp2[action.project_id];

      return Object.assign({}, projects, {
        addedProjects: temp,
        projectDict: temp2
      });

    case 'ADD_TASK_SUCCESSFUL':
      // TODO task post successful feedback like a toast message
      return Object.assign({}, projects, {
        projectDict: Object.assign({}, projects.projectDict, {
          [action.project_id]: Object.assign({}, projects.projectDict[action.project_id], {
            tasks: [
              ...projects.projectDict[action.project_id].tasks,
              action.task_id
            ]
          })
        }),
        tasks: Object.assign({}, projects.tasks, {
          [action.task_id]: {
            name: action.name,
            task_id: action.task_id,
            input: "Add input",
            output: "Add output",
            description: "Add description",
            attempts: 0,
            difficulty: "NA",
            tags: []
          }
        })
      });

    case 'UPDATE_TASK_SUCCESSFUL':
      var index = action.task.task_id;
      var newAttribute = Object.assign({}, projects.tasks, {
        [index]: Object.assign(projects.tasks[index], action.task)
      });
      console.log(newAttribute);
      return Object.assign({}, projects, {tasks: newAttribute});

    case 'DELETE_TASK_SUCCESSFUL':
      var temp = Object.assign({}, projects.tasks);
      delete temp[action.task_id];

      var temp2 = projects.projectDict;
      temp2[action.project_id].tasks = temp2[action.project_id].tasks.filter((task) => {
        return task != action.task_id;
      });

      return Object.assign({}, projects, {
        tasks: temp,
        projectDict: temp2
      })

    default:
      return projects;
  }
}
