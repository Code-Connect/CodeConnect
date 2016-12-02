import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Grid, Row, Col, Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import {Link} from "react-router";

const browseProjectsTooltip = (
    <Tooltip id="tooltip">
        <strong>Looking for real-world Projects to work on?
        </strong>
        These mentored Projects a what you seek</Tooltip>
);
const addProjectTooltip = (
    <Tooltip id="tooltip">
        <strong>Want your project to get worked on?
        </strong>
        Add it to this AWESOME platform</Tooltip>
);

class UserButtons extends Component {
    render() {
        return (
            <Grid fluid={true}>
                <Row>
                    <Col xs={6} md={6} sm={6} lg={6} style={{
                        textAlign: 'right'
                    }}>
                        <OverlayTrigger placement="left" overlay={browseProjectsTooltip}>
                            <Link to="/contributor">
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

                        <OverlayTrigger placement="right" overlay={addProjectTooltip}>
                            <Link to="/mentor">
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
