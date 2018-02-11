import React from "react";
import {connect} from "react-redux";
import ProfileView from "./ProfileView";
import ProjectList from "./ProjectList";
import {Grid} from 'react-bootstrap';
import {getGithubProjects} from './../../actions/projectActions';

import Mentor from "../mentor/Mentor";

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getGithubProjects(this.props.user));
  }

  render() {
    const panelbox = this.props.projectWrapper.isloading
      ? (
        <div>isloading</div>
      )
      : (
        <div className="profile-panel contentbox">
          <h4>Your Projects</h4>
          <ProjectList list={this.props.projectWrapper.projectList}/>
          <h4>Add Projects from Github</h4>
          <ProjectList list={this.props.projectWrapper.addableProjects}/>
        </div>
      );
    return (
      <Grid>
        <ProfileView name={this.props.user.name}/> {panelbox}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.github, projectWrapper: state.currentProjectList};
};

export default connect(mapStateToProps)(Profile);
