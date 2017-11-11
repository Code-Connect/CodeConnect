import React from "react";
import {connect} from "react-redux";

class ProfileView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="myWrapper">
        <h3>{this.props.name}</h3>

        <img src={"https://avatars.githubusercontent.com/" + this.props.name} className={"padding:20px"} style={{
          width: '200px',
          height: 'auto'
        }}/>
      </div>
    );
  }
}

export default ProfileView;
