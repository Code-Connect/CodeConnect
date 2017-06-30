import React, {Component} from "react";
import TryGitModal from "./TryGitModal";
import InstallGit from "./InstallGit";

class ContributorTutorial extends Component {
    render() {
        return (
            <div className="tutorial center-block">
                <h2>1. GitHub</h2>
                <p>Every projects on CodeConnect uses Git as Version Control System (VCS). GitHub is the biggest
                    platform to put SourceCode in the open. Hence the term OpenSource. Now it is your turn to share Code
                    and contribute on Projects. The following steps will show you how.</p>
                <InstallGit/>
                <TryGitModal/>
            </div>
        );
    }
}

export default ContributorTutorial;
