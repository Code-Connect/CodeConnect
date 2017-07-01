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
                                <div>
                                    <h3>Installing on Windows</h3>
                                    <div>
                                        <p>There are also a few ways to install Git on Windows.
                                            The most official build is available for download on the Git website.
                                            Just go to <a href="http://git-scm.com/download/win">http://git-scm.com/download/win</a>
                                            and the download will start automatically.
                                            Note that this is a project called Git for Windows, which is separate from
                                            Git itself; for more information on it, go to <a
                                                href="https://git-for-windows.github.io/">https://git-for-windows.github.io/</a>.
                                        </p>
                                    </div>
                                    <div>
                                        <p>To get an automated installation you can use the <a
                                            href="https://chocolatey.org/packages/git">Git Chocolatey package</a>.
                                            Note that the Chocolatey package is community maintained.</p>
                                    </div>
                                    <div>
                                        <p>Another easy way to get Git installed is by installing GitHub for Windows.
                                            The installer includes a command line version of Git as well as the GUI.
                                            It also works well with Powershell, and sets up solid credential caching and
                                            sane CRLF settings.
                                            We’ll learn more about those things a little later, but suffice it to say
                                            they’re things you want.
                                            You can download this from the GitHub for Windows website, at <a
                                                href="http://windows.github.com">http://windows.github.com</a>.</p>
                                    </div>
                                </div>
                                <a target="_blank"
                                   href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/#_installing_on_windows">Source</a>
                            </TutorialModal>
                        </Col>
                        <Col md={4}>
                            <TutorialModal title={"How to install Git on Mac"} button={"Mac"}>
                                <div>
                                    <h3 id="_installing_on_mac">Installing on Mac</h3>
                                    <div>
                                        <p>
                                            There are several ways to install Git on a Mac.
                                            The easiest is probably to install the Xcode Command Line Tools.
                                            On Mavericks (10.9) or above you can do this simply by trying to run
                                            <em>git</em> from the Terminal the very first time.
                                            If you don’t have it installed already, it will prompt you to install it.
                                        </p>
                                    </div>
                                    <div>
                                        <p>If you want a more up to date version, you can also install it via a binary
                                            installer.
                                            An OSX Git installer is maintained and available for download at the Git
                                            website, at <a href="http://git-scm.com/download/mac">http://git-scm.com/download/mac</a>.
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <img src="https://git-scm.com/book/en/v2/images/git-osx-installer.png"
                                                 alt="Git OS X installer."/>
                                        </div>
                                        <div>Figure 7. Git OS X Installer.</div>
                                    </div>
                                    <div>
                                        <p>You can also install it as part of the GitHub for Mac install.
                                            Their GUI Git tool has an option to install command line tools as well.
                                            You can download that tool from the GitHub for Mac website, at <a
                                                href="http://mac.github.com">http://mac.github.com</a>.</p>
                                    </div>
                                </div>
                                <a target="_blank"
                                   href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/#_installing_on_mac">Source</a>
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