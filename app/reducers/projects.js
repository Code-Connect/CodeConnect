export default function messages(state = {}, action) {
    switch (action.type) {
        case 'GET_REPOS':
            // filter the ccreops from the server
            var temp = action.repos.filter((item) => state.ccrepos.reduce(function(acc, item2) {
                return acc || (item2.project_id == item.project_id || item2.project_id == item.project_id)
            }, false));
            state.ccrepos.map((item) => temp.map((item2) => {
                if (JSON.stringify(item.project_id) === JSON.stringify(item2.project_id)) {
                    delete item.project_id;
                    item2.tasks.push(item);
                }
            }));
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
        default:
            return state;
    }
}
/*
description
name
project_id
task_id*/
