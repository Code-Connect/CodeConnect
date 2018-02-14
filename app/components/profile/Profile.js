import React from "react";
import {connect} from "react-redux";
import ProfileView from "./ProfileView";
import ProjectList from "./ProjectList";
import {Grid, Tabs, Tab} from 'react-bootstrap';
import {getGithubProjects} from './../../actions/projectActions';

import Mentor from "../mentor/Mentor";

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getGithubProjects(this.props.user));
  }

  onClick(item) {
    console.log(JSON.stringify(item));
  }

  handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
  }

  render() {
    const panelbox = this.props.projectWrapper.isloading
      ? (
        <div>isloading</div>
      )
      : (
        <div>
          <ProjectList list={this.props.projectWrapper.projectList} onClick={this.onClick.bind(this)}/>
          <h4>Add Projects from Github</h4>
          <ProjectList list={this.props.projectWrapper.addableProjects} onClick={this.onClick.bind(this)}/>
        </div>
      );

    return (
      <Grid className="profile-panel">
        <ProfileView name={this.props.user.name}/>
        <Tabs className="contentbox" defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Projects">
            <div>
              <h2>Your Projects</h2>
              {panelbox}
            </div>
          </Tab>
          <Tab eventKey={2} title="Demos">
            <div>
              <h2>Demos</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab eventKey={3} title="Commits">
            <div>
              <h2>Last Commit</h2>
              <p>
                This is a third example tab.
              </p>
              <h2>All Commits</h2>
              <p>
                This is a third example tab.
              </p>
            </div>
          </Tab>
        </Tabs>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.github, projectWrapper: state.currentProjectList};
};

export default connect(mapStateToProps)(Profile);
