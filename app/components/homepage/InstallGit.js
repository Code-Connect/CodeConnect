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
                                Coming soon ;)
                            </TutorialModal>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default InstallGit;