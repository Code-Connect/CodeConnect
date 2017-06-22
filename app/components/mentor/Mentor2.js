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
import TaskPanel from './TaskPanel';
import MentorTable from './MentorTable';

class Mentor2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputfield: ''
    };
  }

  saveChange(task) {
    this.props.dispatch(updateTask(task));
  }

  deleteTask(task) {
    this.props.dispatch(deleteTask(task));
  }

  updateTaskAttribute(task_id, fieldtype, newCode) {
    this.props.dispatch({type: 'UPDATE_ATTRIBUTE', task_id: task_id, fieldtype: fieldtype, newCode: newCode});
  }

  addTask(event) {
    this.props.dispatch(addTask(this.state.inputfield));
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
          <Col xs={6} md={4}>
            <FormGroup>
              <InputGroup>
                <FormControl type="text" name="inputfield" placeholder="Projectname" value={this.state.inputfield} onChange={this.handleInputChange.bind(this)}/>
                <InputGroup.Button>
                  <Button bsStyle="success" onClick={this.addTask.bind(this)}>Add new Task</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
            <MentorTable tasks={this.props.tasks}/>
          </Col>
          <Col xs={12} md={8}>{this.props.tasks.map((task) => {
              return (
                <div><TaskPanel updateTaskAttribute={this.updateTaskAttribute.bind(this)} task={task} deleteTask={this.deleteTask.bind(this)} saveChange={this.saveChange.bind(this)}/>
                  <hr/>                
                  </div>
              )
            })}</Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {tasks: state.tasks.mockData};
};

export default connect(mapStateToProps)(Mentor2);
