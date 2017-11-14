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
import ScrollableAnchor from 'react-scrollable-anchor'

class TaskPanel extends React.Component {
  constructor(props) {
    super(props);
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

  createPanel(fieldtype) {
    return (
      <div>
        <hr/>
        <h4>{fieldtype}</h4>
        <ReactMarkdown source={this.props.task[fieldtype]}/>
      </div>
    )
  }

  render() {
    return (
      <div>
        <ScrollableAnchor id={this.props.task.task_id}>
          <div className="well" style={{
            background: "white"
          }}>
            <h2>{this.props.task.name}</h2>
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
