import React, {Component} from "react";
import {Col, Grid, Row} from "react-bootstrap";
import TutorialModal from "./TutorialModal";


class InstallGit extends Component {
    render() {
        return (
            <div>
                <Grid fluid={true}>
                    <Row>
                        <Col md={4}>
                            <TutorialModal title={"How to install Git on Windows"} button={"Windows"}>
                                Coming soon ;)
                            </TutorialModal>
                        </Col>
                        <Col md={4}>
                            <TutorialModal title={"How to install Git on Mac"} button={"Mac"}>
                                Coming soon ;)
                            </TutorialModal>
                        </Col>
                        <Col md={4}>
                            <TutorialModal title={"How to install Git on Linux"} button={"Linux"}>
                                <div>
                                    <h3>Installing on Linux</h3>
                                    <div>
                                        <p>
                                            If you want to install the basic Git tools on Linux via a binary installer,
                                            you can generally do so through the basic package-management tool that comes
                                            with your distribution.
                                            If you’re on Fedora for example, you can use dnf:</p>
                                    </div>
                                    <div>
                                        <div>
                                            <pre><code data-lang="console">$ sudo dnf install git-all</code></pre>
                                        </div>
                                    </div>
                                    <div>
                                        <p>If you’re on a Debian-based distribution like Ubuntu, try apt-get:</p>
                                    </div>
                                    <div>
                                        <div>
                                            <pre><code data-lang="console">$ sudo apt-get install git-all</code></pre>
                                        </div>
                                    </div>
                                    <div>
                                        <p>For more options, there are instructions for installing on several different
                                            Unix flavors on the Git website, at <a
                                                href="http://git-scm.com/download/linux">http://git-scm.com/download/linux</a>.
                                        </p>
                                    </div>
                                </div>
                                <a target="_blank"
                                   href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/#_installing_on_linux">Source</a>
                            </TutorialModal>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default InstallGit;