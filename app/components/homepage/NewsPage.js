import React, {Component} from "react";
import ProjectTableView from "../baukasten/ProjectTableView";
import {getAllProjects} from '../stateConverter';
import {connect} from 'react-redux';
import {Panel, Col, Row, Grid} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import {browserHistory} from 'react-router';

class NewsPage extends Component {

  constructor(props) {
    super(props);
    console.log("gets called");
  }

  onClick(project_id) {
    browserHistory.push('/contributor/projects/' + project_id);
  }

  render() {
    return (
      <Grid className="container" style={{
        'background': 'white'
      }} fluid>
        <Row className="show-grid pageHeader">
          <h1>Recent Projects</h1>
        </Row>
        <Row className="show-grid">
          {this.props.projects.map((project) => {
            const description = project.description
              ? project.description
              : "";
            return (
              <Col md={4} className="newsPageSingleCol">
                <Panel className="newsPageSinglePanel" onClick={() => this.onClick(project.project_id)}>
                  <div className="headerWrapper">
                    <h2>{project.name}</h2>
                  </div>
                  <br/>
                  <ReactMarkdown source={description.substring(0, 200) + '...'}/>
                  <div className="btn-wrapper">
                    <span className="btn btn-default newsPageProjektButton">To Projekt</span>
                  </div>
                </Panel>
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
  console.log("change detected")
  return {projects: getAllProjects(state)};
};

export default connect(mapStateToProps)(NewsPage);
