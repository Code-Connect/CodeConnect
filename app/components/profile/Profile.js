import React from "react";
import {connect} from "react-redux";
import ProfileView from "./ProfileView";
import {Tab, Tabs, Grid, Row, Col} from 'react-bootstrap';
import Mentor from "../mentor/Mentor";

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className="container whiteContainer">
        <Row className="show-grid">
          <Col xs={6} md={3}>
            <ProfileView name={this.props.user.name}/>
          </Col>
          <Col xs={6} md={9}>
            <Mentor/>
          </Col>
        </Row>

      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.github};
};

export default connect(mapStateToProps)(Profile);
