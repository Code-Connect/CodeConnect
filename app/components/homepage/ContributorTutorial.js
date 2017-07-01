import React, {Component} from "react";
import TutorialModal from "./TutorialModal";
import InstallGit from "./InstallGit";

class ContributorTutorial extends Component {
    render() {
        return (
            <div className="tutorial center-block">
                <h2>1. GitHub</h2>
                <p>Every projects on CodeConnect uses Git as Version Control System (VCS). GitHub is the biggest
                    platform to put SourceCode in the open. Hence the term OpenSource. Now it is your turn to share Code
                    and contribute on Projects. The following steps will show you how.</p>
                <ol>
                    <li>
                        <p>Install Git</p>
                        <InstallGit/>
                    </li>
                    <li>
                        <p>Learn about GitHub</p>
                        <TutorialModal title={"How to use GitHub"} button={"How to use GitHub"}>
                            <iframe className="try-git" name="try-git" src="https://try.github.io/"/>
                        </TutorialModal>
                    </li>
                </ol>
            </div>
        );
    }
}

export default ContributorTutorial;
