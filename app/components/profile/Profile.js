import React from "react";
import {connect} from "react-redux";
import ProfileView from "./ProfileView";
import {Tab, Tabs} from 'react-bootstrap';
import Mentor from "../mentor/Mentor";

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container whiteContainer">
        <ProfileView name={this.props.user.name}/>
        <hr/>
        <Mentor/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.github};
};

export default connect(mapStateToProps)(Profile);
