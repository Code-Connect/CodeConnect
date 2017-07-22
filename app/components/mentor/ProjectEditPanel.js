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

class ProjectEditPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      chatroom: this.props.project.chatroom,
      description: this.props.project.description
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.setState({project_id: nextProps.project.project_id, chatroom: nextProps.project.chatroom, description: nextProps.project.description});
    }
  }

  toggleButton(event) {
    this.setState({
      [event.target.name]: !this.state[event.target.name]
    });
  }

  saveChange(event) {
    this.toggleButton(event);
    this.props.saveProject({project_id: this.props.project.project_id, chatroom: this.state.chatroom, description: this.state.description});
  }

  deleteProject(event) {
    this.props.deleteProject();
  }

  updateCode(fieldtype, newCode) {
    this.setState({[fieldtype]: newCode});
  }

  createPanel(fieldtype) {
    const editPanel = this.state.toggle
      ? (<Editor fieldtype={fieldtype} value={this.props.project[fieldtype]} onChange={this.updateCode.bind(this)}/>)
      : <ReactMarkdown source={this.props.project[fieldtype]}/>;

    return (
      <div>
        <hr/>
        <h4>{fieldtype}</h4>
        {editPanel}
      </div>
    )
  }

  render() {
    const editOrSaveButton = this.state.toggle
      ? <Button className="pull-right" name="toggle" onClick={this.saveChange.bind(this)}>Save</Button>
      : (
        <ButtonToolbar className="pull-right">
          <DropdownButton title="Modify" id="dropdown-size-medium">
            <MenuItem eventKey="1" name="toggle" onClick={this.toggleButton.bind(this)}>Edit</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="3" bsStyle="success" onClick={this.deleteProject.bind(this)}>Delete</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      )

    return (
      <div>
        <div className="well" style={{
          background: "white"
        }}>
          {editOrSaveButton}
          <h1>
            {this.props.project.name}
          </h1>
          {this.createPanel("chatroom")}
          {/* {this.createPanel("mentor")} */}
          {this.createPanel("description")}
        </div>
      </div>
    );
  }
}

export default(ProjectEditPanel);
