import React, {Component} from "react";
import TutorialModal from "./TutorialModal";

class ContributorTutorial extends Component {
    render() {
        return (
            <div>
                <h2>1. GitHub</h2>
                <p>All your OpenSource Project on GitHub can be shared via CodeConnect. In order to find Contributors</p>
                <p>Here is a little visualization of the Git Commands, if you want to refresh your knowledge.</p>
                <TutorialModal title={"Visualize Git Commands"} button={"Git Commands"}>
                    <iframe name="git-commands" src="http://onlywei.github.io/explain-git-with-d3"/>
                </TutorialModal>
                <p>More details are available if you click on Contributor</p>
                <h2>2. Code Connect</h2>
                <p>Let's work together to make OpenSource great again. The following Steps show you how to share your Projects:</p>
                <ol>
                    <li><a href="/auth/github">Login</a> to Code Connect via your GitHub Account</li>
                    <li>Navigate to the <a href="/mentor">Mentor</a> Section</li>
                    <li>Click on <code>Add Projects from Github</code></li>
                    <li>Select the Projects you want to Mentor</li>
                    <li>Give Feedback to your Contributors</li>
                    <li>Receive for Feedback</li>
                </ol>
            </div>
        );
    }
}

export default ContributorTutorial;
