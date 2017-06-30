import React from "react";
import {IndexRoute, Route} from "react-router";
import App from "./components/App";
import MentorTask from "./components/mentor/Mentor2";
import Mentor from "./components/mentor/Mentor";
import NotFound from "./components/NotFound";
import HomePage from "./components/HomePage";
import Contributor from "./components/contributor/Contributor";
import Editor from "./components/baukasten/Editor";
import TaskView from "./components/taskView/TaskView";
import Feedback from "./components/feedback/Feedback";

export default function getRoutes(store) {

  const clearMessages = () => {
    store.dispatch({type: 'CLEAR_MESSAGES'});
  };

    return (
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} onLeave={clearMessages}/>
            <Route path="/mentor" component={Mentor} onLeave={clearMessages}/>
            <Route path="/mentor/:project" component={MentorTask} onLeave={clearMessages}/>
            <Route path="/mentor2" component={MentorTask} onLeave={clearMessages}/>
            <Route path="/home" component={HomePage} onLeave={clearMessages}/>
            <Route path="/contributor" component={Contributor} onLeave={clearMessages}/>
            <Route path="/contributor/tasks" component={Contributor} onLeave={clearMessages}/>
            <Route path="/contributor/projects" component={Contributor} onLeave={clearMessages}/>
            <Route path="/editor" component={Editor} onLeave={clearMessages}/>
            <Route path="/task/:task" component={TaskView} onLeave={clearMessages}/>
            <Route path="/feedback" component={Feedback} onLeave={clearMessages}/>
            <Route path="*" component={NotFound} onLeave={clearMessages}/>
        </Route>
    );
}
