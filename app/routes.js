import React from "react";
import {IndexRoute, Route} from "react-router";
import App from "./components/App";
import MentorTask from "./components/mentor/Mentor2";
import NotFound from "./components/NotFound";
import HomePage from "./components/homepage/HomePage";
import Contributor from "./components/contributor/Contributor";
import Editor from "./components/baukasten/Editor";
import TaskView from "./components/taskView/TaskView";
import About from "./components/about/About";
import ProjectTableView from './components/baukasten/ProjectTableView';
import ProjectView from './components/project/ProjectView';
import TaskTableView from './components/baukasten/TaskTableView';
import Profile from "./components/profile/Profile";

export default function getRoutes(store) {

    const clearMessages = () => {
        store.dispatch({type: 'CLEAR_HEADER'});
    };

    return (
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} onLeave={clearMessages}/>
            <Route path="/profile" component={Profile} onLeave={clearMessages}/>
            <Route path="/mentor/:project" component={MentorTask} onLeave={clearMessages}/>
            <Route path="/project/:project_id" component={ProjectView} onLeave={clearMessages}/>

            {/* <Route path="/mentor2" component={MentorTask} onLeave={clearMessages}/> */}
            {/* <Route path="/home" component={HomePage} onLeave={clearMessages}/> */}
            <Route path="/contributor" component={Contributor} onLeave={clearMessages}>
                <IndexRoute component={ProjectTableView} onLeave={clearMessages}/>

                <Route path="project/:id" component={TaskTableView} onLeave={clearMessages}/>

                <Route path="project" component={ProjectTableView}  onLeave={clearMessages}/>

                {/* <Route path="tasks" component={TaskTableView}/> */}
            </Route>
            {/* <Route path="/editor" component={Editor} onLeave={clearMessages}/> */}
            {/* <Route path="/task/:task" component={TaskView} onLeave={clearMessages}/> */}
            <Route path="/about" component={About} onLeave={clearMessages}/>
            <Route path="*" component={NotFound} onLeave={clearMessages}/>
        </Route>
    );
}
