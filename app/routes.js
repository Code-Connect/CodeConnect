import React from "react";
import {IndexRoute, Route} from "react-router";
import App from "./components/App";
import Mentor from "./components/Mentor";
import NotFound from "./components/NotFound";
import HomePage from "./components/routes/HomePage";
import Contributor from "./components/routes/Contributor";
import YourProject from "./components/routes/YourProject";
import YourTasks from "./components/routes/YourTasks";
import MentorLandingPage from "./components/routes/MentorLandingPage";

export default function getRoutes(store) {
    //console.log(store.getState());
    //the store comes from the server
    const setUpStore = () => {
        store.dispatch({type: 'STATE_FROM_SERVER', state : store.getState});
    }
    const clearMessages = () => {
        store.dispatch({type: 'CLEAR_MESSAGES'});
    };
    return (
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} onLeave={clearMessages}/>
            <Route path="/mentor" component={Mentor} onLeave={clearMessages}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/contributor" component={Contributor}/>
            <Route path="/yourproject" component={YourProject}/>
            <Route path="/yourtasks" component={YourTasks}/>
            <Route path="/mentor2" component={MentorLandingPage}/>
            <Route path="*" component={NotFound} onLeave={clearMessages}/>
        </Route>
    );
}
