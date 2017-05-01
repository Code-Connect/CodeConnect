import React from "react";
import {IndexRoute, Route} from "react-router";
import App from "./components/App";
import Mentor from "./components/mentor/Mentor";
import NotFound from "./components/NotFound";
import HomePage from "./components/routes/HomePage";
import Contributor from "./components/contributor/Contributor";
import YourProject from "./components/routes/YourProject";
import YourTasks from "./components/routes/YourTasks";
import MentorLandingPage from "./components/routes/MentorLandingPage";
import Editor from "./components/baukasten/Editor";

export default function getRoutes(store) {

    const clearMessages = () => {
        store.dispatch({type: 'CLEAR_MESSAGES'});
    };

    return (
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} onLeave={clearMessages}/>
            <Route path="/mentor" component={Mentor} onLeave={clearMessages}/>
            <Route path="/home" component={HomePage} onLeave={clearMessages}/>
            <Route path="/contributor" component={Contributor} onLeave={clearMessages}/>
            <Route path="/yourproject" component={YourProject} onLeave={clearMessages}/>
            <Route path="/yourtasks" component={YourTasks} onLeave={clearMessages}/>
            <Route path="/mentor2" component={MentorLandingPage} onLeave={clearMessages}/>
            <Route path="/editor" component={Editor} onLeave={clearMessages}/>
            <Route path="*" component={NotFound} onLeave={clearMessages}/>
        </Route>
    );
}
