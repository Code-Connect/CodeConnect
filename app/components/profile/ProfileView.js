import React from "react";
import {connect} from "react-redux";
import {Panel, Col, Row, Grid} from 'react-bootstrap';

class ProfileView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className ="profilView">
          <img src={"https://avatars.githubusercontent.com/" + this.props.name} style={{
            width: '270px',
            height: 'auto'
          }}/>
          <h1><a href={"https://github.com/" + this.props.name}>{this.props.name}</a></h1>
      </div>
    );
  }
}

export default ProfileView;
