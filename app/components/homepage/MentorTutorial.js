import React, {Component} from "react";
import TutorialModal from "./TutorialModal";

class ContributorTutorial extends Component {
    render() {
        return (
            <div>
                <h2>1. GitHub</h2>
                <p>In case you are not yet familiar with GitHub or you want to refresh your knowledge.</p>
                <TutorialModal title={"How to use GitHub"} button={"How to use GitHub"}>
                    <iframe name="try-git" src="https://try.github.io/"/>
                </TutorialModal>
                <p>More details are available if you click on Contributor</p>
                <h2>2. CodeConnect</h2>
                <p>Now that you got Git and know about GitHub. Let's work together to make OpenSource great again.</p>
                <ol>
                    <li><a href="/auth/github">Login</a> to CodeConnect via your GitHub Account</li>
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
