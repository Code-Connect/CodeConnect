import React from "react";
import {connect} from "react-redux";
import ProfileView from "./ProfileView";
import ProjectList from "./ProjectList";
import {Grid, Tabs, Tab} from 'react-bootstrap';
import {getGithubProjects, addProject} from './../../actions/projectActions';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import {browserHistory} from 'react-router';
import Mentor from "../mentor/Mentor";
import CalendarHeatmap from 'react-calendar-heatmap';

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getGithubProjects(this.props.user));
  }

  addProject(project) {
    this.props.dispatch(addProject(project));
  }

  onClickView(project) {
    browserHistory.push("/mentor/" + project.project_id);
  }

  onClick(item) {
    console.log(item);
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
          <br/>
          <ProjectList list={this.props.projectWrapper.projectList} description="View" onClick={this.onClickView.bind(this)}/>
          <hr/>
          <h4>Add Projects from Github</h4>
          <ProjectList list={this.props.projectWrapper.addableProjects} description="Add" onClick={this.addProject.bind(this)}/>
        </div>
      );

    return (
      <Grid className="profile-panel">
        <ProfileView name={this.props.user.name}/>
        <Tabs className="contentbox projects-tab" defaultActiveKey={1} id="uncontrolled-tab-example">
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
              <h2>Commit Activity</h2>
              <CalendarHeatmap
                startDate={new Date('2016-01-01')}
                endDate={new Date('2016-12-31')}
                values={[
                  { date: '2016-01-01' },
                  { date: '2016-01-22' },
                  { date: '2016-03-03' },
                  { date: '2016-01-30' },
                  // ...and so on
                ]}
              />
              <h2>Pull Requests</h2>
              <CalendarHeatmap
                startDate={new Date('2016-01-01')}
                endDate={new Date('2016-12-31')}
                values={[
                  { date: '2016-01-01' },
                  { date: '2016-01-22' },
                  { date: '2016-03-03' },
                  { date: '2016-01-30' },
                  // ...and so on
                ]}
              />
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
