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

class TaskPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      rename: false,
      inputfield: this.props.task.name
    }
  }

  toggleButton(event) {
    this.setState({
      [event.target.name]: !this.state[event.target.name]
    });
  }

  renameTask(event) {
    this.toggleButton(event);
    this.props.saveChange(this.props.task);
  }

  saveChange(event) {
    this.toggleButton(event);
    this.props.saveChange(this.props.task);
  }

  deleteTask(event) {
    this.props.deleteTask(this.props.task);
  }

  //bis jetzt nur für name
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.props.updateTaskAttribute(this.props.task.task_id, "name", event.target.value);
  }

  createPanel(fieldtype) {
    const editPanel = this.state.toggle
      ? // fieldtype: input or description or output
      (<Editor onChange={this.props.updateTaskAttribute.bind(this)} task_id={this.props.task.task_id} fieldtype={fieldtype} code={this.props.task[fieldtype]}/>)
      : null;

    return (
      <div>
        <hr/>
        <h4>{fieldtype}</h4>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={4}>
              <ReactMarkdown source={this.props.task[fieldtype]}/>
            </Col>
            <Col sm={6} md={8}>
              {editPanel}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

  render() {
    const editOrSaveButton = this.state.rename
      ? null
      : this.state.toggle
        ? <Button className="pull-right" name = "toggle" onClick={this.saveChange.bind(this)}>Save</Button>
        : (
          <ButtonToolbar className="pull-right">
            <DropdownButton title="Modify" id="dropdown-size-medium">
              <MenuItem eventKey="1" name = "toggle" onClick={this.toggleButton.bind(this)}>Edit</MenuItem>
              <MenuItem divider/>
            <MenuItem eventKey="2" name = "rename" onClick={this.toggleButton.bind(this)}>Rename</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey="3" bsStyle="success" onClick={this.deleteTask.bind(this)}>Delete</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        )

    const headerOrRenameForm = this.state.rename
      ? <FormGroup>
          <InputGroup>
            <FormControl type="text" name="inputfield" onChange ={this.handleChange.bind(this)} placeholder="Projectname" value={this.state.inputfield}/>
            <InputGroup.Button>
              <Button bsStyle="success" name = "rename" onClick={this.renameTask.bind(this)}>Rename</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      : <h1>
        {this.props.task.name}
      </h1>

    return (
      <div>
        {editOrSaveButton}
        {headerOrRenameForm}
        {this.createPanel("input", this.props.task)}
        {this.createPanel("output", this.props.task)}
        {this.createPanel("description", this.props.task)}
      </div>
    );
  }
}

export default(TaskPanel);
