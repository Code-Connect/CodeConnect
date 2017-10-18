import React, {Component} from "react";
import ProjectTableView from "../baukasten/ProjectTableView";
import {getAllProjects} from '../stateConverter';
import {connect} from 'react-redux';
import {Panel, Col, Row, Grid} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import {browserHistory} from 'react-router'

class NewsPage extends Component {

  onClick(project_id){
    browserHistory.push('/contributor/projects/' + project_id);
  }

    render() {
        return (
            <Grid style={{'background': 'white'}}>
                <Row className="show-grid"><h1>Recent Projects</h1></Row>
                <Row className="show-grid">
                    {
                        this.props.projects.map(
                            (project) => {
                                const description = project.description ?
                                    project.description: "";
                                return (
                                    <Col md={4}>
                                        <Panel header={<h1>{project.name}</h1>} onClick={() => this.onClick(project.project_id)}>
                                            <ReactMarkdown source={description.substring(0,200)+'...'}/>
                                        </Panel>
                                    </Col>
                                )
                            }
                        )
                    }
                </Row>
            </Grid>
        );
    }
}


const mapStateToProps = (state) => {
    return {projects: getAllProjects(state)};
};

export default connect(mapStateToProps)(NewsPage);
