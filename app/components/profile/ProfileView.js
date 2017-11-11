import React from "react";
import {connect} from "react-redux";
import {Panel, Col, Row, Grid} from 'react-bootstrap';

class ProfileView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <Grid>
          <div className="show-grid pageHeader">
          <h1>Home > {this.props.name}</h1>
        </div>
      </Grid>

        <div className="col-sm-4">
          <img src={"https://avatars.githubusercontent.com/" + this.props.name} className={"padding:20px"} style={{
            width: '200px',
            height: 'auto'
          }}/>
        <h4>***</h4></div>
        <div className="col-sm-4">
          <h3>Description</h3>
          Short User Description
          Short User Description
          Short User Description
          Short User Description
          Short User Description
          Short User Description
        </div>
        <div className="col-sm-4">
          <h3> Statistic </h3>
          Uploaded Projects: 12
          <br/>
          Uploaded Tasks: 213
          <br/>
          Follower: 213
          <br/>
          Contact: 213
          <br/>
          Task Participation: 12
        </div>
      </div>
    );
  }
}

export default ProfileView;
