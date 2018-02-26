import React from "react";
import {connect} from "react-redux";

class ProfileView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <img className="avatar-border" src={"https://avatars.githubusercontent.com/" + this.props.name} style={{
            width: '100px',
            height: 'auto'
          }}/>
          <div className="name-box">
            <h1 >
              <a href={"https://github.com/" + this.props.name}>{this.props.name}</a>
            </h1>
            <p>short description about yourself</p>
          </div>
        </div>
      </div>

    );
  }
}

export default ProfileView;
