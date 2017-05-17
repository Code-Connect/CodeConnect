import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import Editor from '../baukasten/Editor.js';
import {postTask} from '../../actions/taskActions';

class TaskPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: false,
      output: false,
      description: false,
      task: this.props.task
    }
  }

  toggleButton(event) {
    this.setState({
      [event.target.name]: !this.state[event.target.name]
    }, () => {
      console.log(this.state)
    });
  }

  saveChange(event) {
    this.toggleButton(event);
    // TODO hier muss das gedispatcht werden
    // this.props.dispatch(postTask(event.target.id, event.target.name, event.target.value));
    this.props.saveChange(event);
  }

  updateText(task_id, fieldtype, newCode) {
    this.props.updateText(task_id, fieldtype, newCode);
  }

  createPanel(fieldtype, task) {
    const editPanel = this.state[fieldtype]
      ? // fieldtype: input or description or output
      (<Editor onChange={this.updateText.bind(this)} task_id={task.task_id} fieldtype={fieldtype} code={task[fieldtype]}/>)
      : null;

    const editOrSaveButton = this.state[fieldtype]
      ? <Button id={task.task_id} name={fieldtype} value={task[fieldtype]} className="pull-right" onClick={this.saveChange.bind(this)}>Save</Button>
      : <Button name={fieldtype} className="pull-right" onClick={this.toggleButton.bind(this)}>Edit</Button>

    return (
      <div>
        <Panel header={(
          <div>
            {editOrSaveButton}
            <h4>{fieldtype}</h4>
          </div>
        )}>
          <ReactMarkdown source={this.props.task[fieldtype]}/> {editPanel}
        </Panel>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Panel header={< h1 > {
          this.props.task.name
        } < /h1>} bsStyle="warning">
          {this.createPanel("input", this.props.task)}
          {this.createPanel("output", this.props.task)}
          {this.createPanel("description", this.props.task)}
        </Panel>
      </div>
    );
  }
}

// tasks[0] = {input: string,
//         output: string,
//         description: string,
//         task_id: integer,
//         name: string}

export default(TaskPanel);
