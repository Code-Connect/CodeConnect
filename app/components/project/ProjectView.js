import React from 'react';
import {connect} from 'react-redux'
import {
  Button,
  FormGroup,
  InputGroup,
  FormControl,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import EditPanel from '../baukasten/EditPanel.js';
import Editor from '../baukasten/Editor.js';
import {updateTask, addTask, deleteTask} from '../../actions/taskActions';
import {updateProject, deleteProject, getProject} from '../../actions/projectActions';
import {getTasks} from '../../actions/taskActions';
import TaskPanel from './TaskPanel';
import MentorTable from './MentorTable';
import jsonQuery from 'json-query';
import ProjectEditPanel from './ProjectEditPanel'
import {browserHistory} from 'react-router';


//Mentor Edit Page for single Project(Important)
class ProjectView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getProject(this.props.params.project_id));
    this.props.dispatch(getTasks(this.props.params.project_id));
  }

  render() {
    return (
      <div className="container" style={{
        borderRadius: '10px',
        background: 'white',
        padding: '50px'
      }}>

        <Row className="show-grid">
          <Col xs={12} md={4}>
            <MentorTable onClick={() => {}} datatype="task" data={this.props.currentTasks.tasks}/>
          </Col>
          <Col xs={12} md={8}>
          <ProjectEditPanel
            project={this.props.currentProject.project}/>
            {this.props.currentTasks.tasks.map((task) => {
              return (
                  <TaskPanel task={task}/>
              )
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {currentTasks: state.currentTasks, currentProject: state.currentProject};
};


export default connect(mapStateToProps)(ProjectView);
