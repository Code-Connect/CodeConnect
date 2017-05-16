import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import EditPanel from '../baukasten/EditPanel.js';
import Editor from '../baukasten/Editor.js';
import {postTask} from '../../actions/taskActions';

class Mentor2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: false,
      output: false,
      description: false
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
    // TODO save the text in the database
    this.props.dispatch(postTask(event.target.id, event.target.name, event.target.value));
  }

  updateText(task_id, fieldtype, newCode) {
    this.props.dispatch({type: 'UPDATE_TEXT', task_id: task_id, fieldtype: fieldtype, newCode: newCode});
  }

  createPanel(fieldtype, task) {
    const editPanel = this.state[fieldtype]
      ?// fieldtype: input or description or output
      (<Editor onChange={this.updateText.bind(this)} task_id={task.task_id} fieldtype={fieldtype} code={task[fieldtype]}/>)
      : null;
      
    const editOrSaveButton = this.state[fieldtype]
      ? <Button id={task.task_id} name={fieldtype} value = {task[fieldtype]} className="pull-right" onClick={this.saveChange.bind(this)}>Save</Button>
      : <Button name={fieldtype} className="pull-right" onClick={this.toggleButton.bind(this)}>Edit</Button>

    return (
      <div>
        <div>
          <Panel header={(
            <div>
              {editOrSaveButton}
              <h4>{fieldtype}</h4>
            </div>
          )}>
            <ReactMarkdown source={task[fieldtype]}/> {editPanel}
          </Panel>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.tasks.map((task) => {
          return (
            <Panel header={< h1 > {
              task.name
            } < /h1>} bsStyle="warning">
              {this.createPanel("input", task)}
              {this.createPanel("output", task)}
              {this.createPanel("description", task)}
            </Panel>
          )
        })}
      </div>
    );
  }
}

// tasks[0] = {input: string,
//         output: string,
//         description: string,
//         task_id: integer,
//         name: string}

const mapStateToProps = (state) => {
  return {tasks: state.tasks.mockData};
};

export default connect(mapStateToProps)(Mentor2);
