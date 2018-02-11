import React from "react";
import {connect} from "react-redux";

class ProfileView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className ="profile-panel">
          <img className = "avatar-border" src={"https://avatars.githubusercontent.com/" + this.props.name} style={{
            width: '100px',
            height: 'auto'
          }}/>
          <h1 className="name-box"><a href={"https://github.com/" + this.props.name}>{this.props.name}</a></h1>
      </div>
    );
  }
}

export default ProfileView;
