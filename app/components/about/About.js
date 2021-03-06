import React, {Component} from "react";
import {Button, Col, Grid, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import Logo from "./Logo";
import ContributorTutorial from "./ContributorTutorial";
import MentorTutorial from "./MentorTutorial";
import RaisedButton from 'material-ui/RaisedButton';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tutorial: <p className="text-center">Choose to be a Contributor or Mentor. Then see How it is done...</p>
        }
    }
    render() {
        return (
            <div className="about">
                <Logo/>
                <h3 className="text-center">Ready to get started?</h3>
                <Grid fluid={true}>
                    <Row>
                        <Col xs={6} md={6} sm={6} lg={6} style={{
                            textAlign: 'right'
                        }}>
                            <OverlayTrigger placement="left" overlay={this.buildTooltipContributor()}>
                              <RaisedButton label="Contributor" primary={true}/>
                            </OverlayTrigger>
                        </Col>
                        <Col xs={6} md={6} sm={6} lg={6}>

                            <OverlayTrigger placement="right" overlay={this.buildTooltipMentor()}>
                              <RaisedButton label="Mentor" primary={true}/>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                </Grid>
                <div className="tutorial center-block" id="tutorial">
                    {this.state.tutorial}
                </div>
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

    buildTooltipContributor() {
        let message =
            (
                <div>
                    <strong>Looking for real-world Projects to work on? </strong>
                </div>
            );
        return (<Tooltip id="tooltip">{message}</Tooltip>);
    }

    buildTooltipMentor() {
        let message =
            (
                <div>
                    <strong>Want to mentor your own Project? </strong>
                </div>
            );
        return (<Tooltip id="tooltip">{message}</Tooltip>);
    }
}

export default About;
