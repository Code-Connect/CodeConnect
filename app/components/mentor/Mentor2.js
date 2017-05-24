import React from 'react';
import {connect} from 'react-redux'
import { Button, FormGroup, InputGroup, FormControl} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import EditPanel from '../baukasten/EditPanel.js';
import Editor from '../baukasten/Editor.js';
import {updateTask, addTask, deleteTask} from '../../actions/taskActions';
import TaskPanel from './TaskPanel';

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

  deleteTask(task){
    this.props.dispatch(deleteTask(task));
  }

  updateText(task_id, fieldtype, newCode) {
    this.props.dispatch({type: 'UPDATE_TEXT', task_id: task_id, fieldtype: fieldtype, newCode: newCode});
  }

  addTask(event) {
    // TODO muss noch gemacht werden
    this.props.dispatch(addTask(this.state.inputfield));
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" name = "inputfield" placeholder="Projectname" value={this.state.inputfield} onChange={this.handleInputChange.bind(this)}/>
            <InputGroup.Button>
              <Button bsStyle="success" onClick={this.addTask.bind(this)}>Add new Task</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>

        {this.props.tasks.map((task) => {
          return (<TaskPanel task={task} deleteTask = {this.deleteTask.bind(this)}updateText={this.updateText.bind(this)} saveChange={this.saveChange.bind(this)}/>)
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {tasks: state.tasks.mockData};
};

export default connect(mapStateToProps)(Mentor2);
