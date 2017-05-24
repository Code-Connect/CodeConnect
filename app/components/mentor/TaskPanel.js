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
  DropdownButton
} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import Editor from '../baukasten/Editor.js';
import {updateTask} from '../../actions/taskActions';

class TaskPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }

  toggleButton(event) {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  saveChange(event) {
    this.toggleButton(event);
    this.props.saveChange(this.props.task);
  }

  deleteTask(event) {
    this.props.deleteTask(this.props.task);
  }

  createPanel(fieldtype) {
    const editPanel = this.state.toggle
      ? // fieldtype: input or description or output
      (<Editor onChange={this.props.updateText.bind(this)} task_id={this.props.task.task_id} fieldtype={fieldtype} code={this.props.task[fieldtype]}/>)
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
    const editOrSaveButton = this.state.toggle
      ? <Button className="pull-right" onClick={this.saveChange.bind(this)}>Save</Button>
      : (
        <ButtonToolbar className="pull-right">
          <DropdownButton title="Modify" id="dropdown-size-medium">
            <MenuItem eventKey="1" onClick={this.toggleButton.bind(this)}>Edit</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="2" onClick={this.deleteTask.bind(this)}>Delete</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      )

    return (
      <div>
        {editOrSaveButton}
        <h1>
          {this.props.task.name}
        </h1>
        {this.createPanel("input", this.props.task)}
        {this.createPanel("output", this.props.task)}
        {this.createPanel("description", this.props.task)}
      </div>
    );
  }
}

export default(TaskPanel);
