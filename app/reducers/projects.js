export default function messages(state = {}, action) {
    switch (action.type) {
        case 'GET_REPOS':
            var temp = [];
            action.repos.map((item) => {
                state.ccrepos.map((item2) => {
                    if (item2.project_id == item.repoid || item2.repoid == item.repoid) {
                        temp.push(item);
                    }
                })
            })
            return Object.assign({}, state, {
                ccrepos: temp,
                repos: action.repos.filter((item) =>
                    temp.reduce(function(acc, item2) {
                        return acc && (JSON.stringify(item.repoid) !== JSON.stringify(item2.repoid))
                    }, true)
                )
            })
            break;
        case 'ADD_PROJECT_TO_CC':
            console.log("states")
            console.log(state);
            //state is state.projects
            return Object.assign({}, state, {
                repos: state.repos.filter((item) => item.name !== action.project.name),
                ccrepos: [...state.ccrepos, action.project]
            })
            break;

        default:
            return state;
    }
}
