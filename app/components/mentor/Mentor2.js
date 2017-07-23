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
import {updateProject, deleteProject} from '../../actions/projectActions';
import TaskPanel from './TaskPanel';
import MentorTable from './MentorTable';
import jsonQuery from 'json-query';
import ProjectEditPanel from './ProjectEditPanel'

class Mentor2 extends React.Component {
  constructor(props) {
    super(props);
    var getIndex = this.props.projects.findIndex((item) => {return item.project_id == this.props.params.project});
    this.state = {
      inputfield: '',
      project_id: this.props.params.project,
      tasks: this.props.projects[getIndex].tasks.map((item)=>{
        return this.props.tasks[item]})
    };
  }

  componentWillReceiveProps(nextProps){
    var getIndex = nextProps.projects.findIndex((item) => {return item.project_id == this.props.params.project});
    this.setState({
      inputfield: '',
      project_id: nextProps.params.project,
      tasks: nextProps.projects[getIndex].tasks.map((item)=>{
        return nextProps.tasks[item]})
    },function(){
      console.log("hi");
      console.log(this.state.tasks);
    });
  }

  saveTask(task) {
    this.props.dispatch(updateTask(task));
  }

  saveProject(project){
    this.props.dispatch(updateProject(project));
  }

  deleteTask(task, project_id) {
    this.props.dispatch(deleteTask(task, this.state.project_id));
  }

  deleteProject(event) {
    this.props.dispatch(deleteProject(this.state.project_id));
    this.props.history.push('/mentor');
  }

  updateTaskAttribute(task_id, fieldtype, newCode) {
    this.props.dispatch({type: 'UPDATE_ATTRIBUTE', task_id: task_id, fieldtype: fieldtype, newCode: newCode});
  }

  addTask(event) {
    this.props.dispatch(addTask(this.state.inputfield, this.state.project_id));
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
            <MentorTable onClick={() => {}} datatype="task" data={this.state.tasks}/>
          </Col>
          <Col xs={12} md={8}>
          <ProjectEditPanel
            saveProject = {this.saveProject.bind(this)}
            deleteProject = {this.deleteProject.bind(this)}
            project={this.props.projects.find((item)=>{return this.state.project_id == item.project_id})}/>
            {this.state.tasks.map((task) => {
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
  return {tasks: state.projects.tasks, projects: state.projects.addedProjects};
};


export default connect(mapStateToProps)(Mentor2);
