import React, {Component} from "react";
import {Button, Col, Grid, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import Logo from "./Logo";
import ContributorTutorial from "./ContributorTutorial";
import MentorTutorial from "./MentorTutorial";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tutorial: <p>Choose to be a Contributor or Mentor. Then see How it is done...</p>
        }
    }
    render() {
        return (
            <div>
                <Logo/>
                <h3>Ready to get started?</h3>
                <Grid fluid={true}>
                    <Row>
                        <Col xs={6} md={6} sm={6} lg={6} style={{
                            textAlign: 'right'
                        }}>
                            <OverlayTrigger placement="left" overlay={this.buildBrowseProjectsTooltip()}>
                                <Button onClick={this.contributor.bind(this)}
                                        bsStyle="success" style={{
                                    paddingLeft: '6%',
                                    paddingRight: '6%'
                                }} bsSize="large">
                                    Contributor
                                </Button>
                            </OverlayTrigger>
                        </Col>
                        <Col xs={6} md={6} sm={6} lg={6}>

                            <OverlayTrigger placement="right" overlay={this.buildAddProjectTooltip()}>
                                <Button onClick={this.mentor.bind(this)}
                                        bsStyle="warning" style={{
                                    paddingRight: '10%',
                                    paddingLeft: '10%'
                                }} bsSize="large">
                                    Mentor
                                </Button>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                </Grid>
                {this.state.tutorial}
            </div>
        );
    }

    contributor() {
        this.setState({
            tutorial: <ContributorTutorial/>
        });
    }

    mentor() {
        this.setState({
            tutorial: <MentorTutorial/>
        });
    }

    buildBrowseProjectsTooltip() {
        let message = (this.props.user) ?
            (
                <div>
                    <strong>Looking for real-world Projects to work on? </strong>
                    These mentored Projects a what you seek
                </div>
            ) : (<strong>Please login to view all Projects</strong>);
        return (<Tooltip id="tooltip">{message}</Tooltip>);
    }

    buildAddProjectTooltip() {
        let message = (this.props.user) ?
            (
                <div>
                    <strong>Want your project to get worked on? </strong>
                    Add it to this AWESOME platform
                </div>
            ) : (<strong>Please login add your Projects</strong>);
        return (<Tooltip id="tooltip">{message}</Tooltip>);
    }
}

export default HomePage;
