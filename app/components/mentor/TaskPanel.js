import React from 'react';
import {connect} from 'react-redux'
import {
  Panel,
  Button,
  Grid,
  Col,
  Row,
  ButtonToolbar,
  MenuItem,
  DropdownButton,
  FormGroup,
  InputGroup,
  FormControl
} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import Editor from '../baukasten/Editor.js';
import {updateTask} from '../../actions/taskActions';
import ScrollableAnchor from 'react-scrollable-anchor'

class TaskPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      rename: false,
      name: this.props.task.name,
      input: this.props.task.input,
      output: this.props.task.output,
      description: this.props.task.description
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.setState({name: nextProps.task.name, input: nextProps.task.input, output: nextProps.task.output, description: nextProps.task.description});
    }
  }

  toggleButton(event) {
    this.setState({
      [event.target.name]: !this.state[event.target.name]
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  renameTask(event) {
    this.toggleButton(event);
    this.props.saveChange({name: this.state.name, task_id: this.props.task.task_id});
  }

  saveChange(event) {
    this.toggleButton(event);
    this.props.saveChange({task_id: this.props.task.task_id, input: this.state.input, output: this.state.output, description: this.state.description});
  }

  deleteTask(event) {
    this.props.deleteTask({task_id: this.props.task.task_id});
  }

  updateCode(fieldtype, newCode) {
    this.setState({[fieldtype]: newCode});
  }

  createPanel(fieldtype) {
    const editPanel = this.state.toggle
      ? (<Editor fieldtype={fieldtype} value={this.props.task[fieldtype]} task_id={this.props.task.task_id} onChange={this.updateCode.bind(this)}/>)
      : <ReactMarkdown source={this.props.task[fieldtype]}/>;

    return (
      <div>
        <hr/>
        <h4>{fieldtype}</h4>
        {editPanel}
      </div>
    )
  }

  render() {
    const editOrSaveButton = this.state.rename
      ? null
      : this.state.toggle
        ? <Button className="pull-right" name="toggle" onClick={this.saveChange.bind(this)}>Save</Button>
        : (
          <ButtonToolbar className="pull-right">
            <DropdownButton title="Modify" id="dropdown-size-medium">
              <MenuItem eventKey="1" name="toggle" onClick={this.toggleButton.bind(this)}>Edit</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey="2" name="rename" onClick={this.toggleButton.bind(this)}>Rename</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey="3" bsStyle="success" onClick={this.deleteTask.bind(this)}>Delete</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        )

    const headerOrRenameForm = this.state.rename
      ? <FormGroup>
          <InputGroup>
            <FormControl type="text" name="name" onChange ={this.handleChange.bind(this)} placeholder="Projectname" value={this.state.name}/>
            <InputGroup.Button>
              <Button bsStyle="success" name="rename" onClick={this.renameTask.bind(this)}>Rename</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      : <h1>
        {this.props.task.name}
      </h1>

    return (
      <div>
        <ScrollableAnchor id={this.props.task.task_id}>
          <div className="well" style={{background:"white"}}>
            {editOrSaveButton}
            {headerOrRenameForm}
            {this.createPanel("input")}
            {this.createPanel("output")}
            {this.createPanel("description")}
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default(TaskPanel);
