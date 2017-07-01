import React, {Component} from "react";
import TutorialModal from "./TutorialModal";
import InstallGit from "./InstallGit";
import {Button} from "react-bootstrap";

class ContributorTutorial extends Component {
    render() {
        return (
            <div>
                <h2>1. GitHub</h2>
                <p>Every projects on CodeConnect uses Git as Version Control System (VCS). GitHub is the biggest
                    platform to put SourceCode in the open. Hence the term OpenSource. Now it is your turn to share Code
                    and contribute on Projects. The following steps will show you how.</p>
                <ol>
                    <li>
                        <p>Learn about GitHub</p>
                        <TutorialModal title={"How to use GitHub"} button={"How to use GitHub"}>
                            <iframe name="try-git" src="https://try.github.io/"/>
                        </TutorialModal>
                    </li>
                    <li>
                        <p>Install Git</p>
                        <InstallGit/>
                    </li>
                    <li>
                        <p>Login to GitHub</p>
                        <Button target={"_blank"} href={"https://github.com/login"}
                                bsStyle="primary">
                            GitHub
                        </Button>
                    </li>
                </ol>
                <h2>2. CodeConnect</h2>
                <p>Now that you got Git and know about GitHub. Let's work together to make OpenSource great again.</p>
                <ol>
                    <li>Navigate to the <a href="/contributor">Contributor</a> Section</li>
                    <li>Choose a Project/Task to work on</li>
                    <li>Clone it to your Machine</li>
                    <li>Start Coding</li>
                    <li>Create PullRequest</li>
                    <li>Give Feedback</li>
                    <li>Receive for Feedback</li>
                </ol>
            </div>
        );
    }
}

export default ContributorTutorial;
