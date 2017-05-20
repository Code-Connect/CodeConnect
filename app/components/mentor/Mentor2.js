import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import EditPanel from '../baukasten/EditPanel.js';
import Editor from '../baukasten/Editor.js';
import {updateTask, addTask} from '../../actions/taskActions';
import TaskPanel from './TaskPanel';

class Mentor2 extends React.Component {
  constructor(props) {
    super(props);
  }

  saveChange(event) {
    this.props.dispatch(updateTask(event.target.id, event.target.name, event.target.value));
  }

  updateText(task_id, fieldtype, newCode) {
    this.props.dispatch({type: 'UPDATE_TEXT', task_id: task_id, fieldtype: fieldtype, newCode: newCode});
  }

  addTask(event){
    // TODO muss noch gemacht werden
    this.props.dispatch(addTask("1 kewin"));
  }

  render() {
    return (
      <div>
        <Button bsStyle = "success" onClick = {this.addTask.bind(this)} >Add new Task</Button>

        {this.props.tasks.map((task) => {
          return (<TaskPanel task={task} updateText={this.updateText.bind(this)} saveChange={this.saveChange.bind(this)}/>)
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {tasks: state.tasks.mockData};
};

export default connect(mapStateToProps)(Mentor2);
