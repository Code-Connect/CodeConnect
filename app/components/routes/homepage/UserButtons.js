import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Grid, Row, Col, Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import {Link} from "react-router";


class UserButtons extends Component {
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

    render() {
        let toContributor = (this.props.user) ? "/contributor" : "/";
        let toMentor = (this.props.user) ? '/mentor' : "/";
        return (
            <Grid fluid={true}>
                <Row>
                    <Col xs={6} md={6} sm={6} lg={6} style={{
                        textAlign: 'right'
                    }}>
                        <OverlayTrigger placement="left" overlay={this.buildBrowseProjectsTooltip()}>
                            <Link to={toContributor}>
                                <Button bsStyle="success" style={{
                                    paddingLeft: '6%',
                                    paddingRight: '6%'
                                }} bsSize="large">
                                    Browse Projects
                                </Button>
                            </Link>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={6} md={6} sm={6} lg={6}>

                        <OverlayTrigger placement="right" overlay={this.buildAddProjectTooltip()}>
                            <Link to={toMentor}>
                                <Button bsStyle="warning" style={{
                                paddingRight: '10%',
                                paddingLeft: '10%'
                            }} bsSize="large">
                                Add Project
                            </Button>
                            </Link>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Grid>
        )
    }

}
const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    console.log(state.user.github);
    return {user: state.user.github};
};

export default connect(mapStateToProps)(UserButtons);
