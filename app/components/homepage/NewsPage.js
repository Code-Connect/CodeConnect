import React, {Component} from "react";
import ProjectTableView from "../baukasten/ProjectTableView";
import {getAllProjects} from '../stateConverter';
import {connect} from 'react-redux';
import {Panel, Col, Row, Grid} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import ProjectCards from "./ProjectCards";
import {getPublicProjects} from '../../actions/projectActions';

class NewsPage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getPublicProjects());
  }

  onClick(project_id) {
    browserHistory.push('/project/' + project_id);
  }

  render() {
    return (
      <Grid className="container whiteContainer">
        <Row className="show-grid pageHeader">
          <h1>Dashboard</h1>
        </Row>
        <br/>
        <Row className="show-grid ">
          {this.props.projects.projectList.map((project) => {
            return (
              <Col md={4}>
                  <ProjectCards project={project} onClick={() => this.onClick(project.project_id)}/>
              </Col>
            )
          })
}
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {projects: state.currentProjectList};
};

export default connect(mapStateToProps)(NewsPage);
