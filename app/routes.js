import React from "react";
import {IndexRoute, Route} from "react-router";
import App from "./components/App";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import HomePage from "./components/routes/HomePage";
import Contributor from "./components/routes/Contributor";
import YourProject from "./components/routes/YourProject";
import YourTasks from "./components/routes/YourTasks";
import MentorLandingPage from "./components/routes/MentorLandingPage";

export default function getRoutes(store) {
  const clearMessages = () => {
    store.dispatch({
      type: 'CLEAR_MESSAGES'
    });
  };
  return (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} onLeave={clearMessages}/>
      <Route path="/contact" component={Contact} onLeave={clearMessages}/>

      <Route path="/home" component={ HomePage }/>
      <Route path="/contributor" component={ Contributor }/>
      <Route path="/yourproject" component={ YourProject }/>
      <Route path="/yourtasks" component={ YourTasks }/>
      <Route path="/mentor" component={ MentorLandingPage }/>


      <Route path="*" component={NotFound} onLeave={clearMessages}/>
    </Route>
  );
}
