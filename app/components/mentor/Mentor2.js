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
import {getAddedProjects} from "./../stateConverter.js"
import {browserHistory} from 'react-router';


//Mentor Edit Page for single Project(Important)
class Mentor2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputfield: ''
    };
  }

  componentDidMount() {
    this.props.dispatch(getProject(this.props.params.project_id));
    this.props.dispatch(getTasks(this.props.params.project_id));
  }

  saveTask(task) {
    this.props.dispatch(updateTask(task, this.props.params.project));
  }

  saveProject(project){
    this.props.dispatch(updateProject(project));
  }

  deleteTask(task, project_id) {
    this.props.dispatch(deleteTask(task, this.props.params.project_id));
  }

  deleteProject(event) {
    this.props.dispatch(deleteProject(this.props.params.project_id));
    browserHistory.push('/');
  }

  updateTaskAttribute(task_id, fieldtype, newCode) {
    this.props.dispatch({type: 'UPDATE_ATTRIBUTE', task_id: task_id, fieldtype: fieldtype, newCode: newCode});
  }

  addTask(event) {
    this.props.dispatch(addTask(this.state.inputfield, this.props.params.project_id));
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
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
            <FormGroup>
              <InputGroup>
                <FormControl type="text" name="inputfield" placeholder="Projectname" value={this.state.inputfield} onChange={this.handleInputChange.bind(this)}/>
                <InputGroup.Button>
                  <Button bsStyle="success" onClick={this.addTask.bind(this)}>Add new Task</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
            <MentorTable onClick={() => {}} datatype="task" data={this.props.currentTasks.tasks}/>
          </Col>
          <Col xs={12} md={8}>
          <ProjectEditPanel
            saveProject = {this.saveProject.bind(this)}
            deleteProject = {this.deleteProject.bind(this)}
            project={this.props.currentProject.project}/>
            {this.props.currentTasks.tasks.map((task) => {
              return (
                  <TaskPanel updateTaskAttribute={this.updateTaskAttribute.bind(this)} task={task} deleteTask={this.deleteTask.bind(this)} saveChange={this.saveTask.bind(this)}/>
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


export default connect(mapStateToProps)(Mentor2);
