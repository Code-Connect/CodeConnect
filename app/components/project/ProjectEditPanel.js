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

class ProjectEditPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      chatroom: this.props.project.chatroom,
      description: this.props.project.description,
      image: this.props.project.image
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.setState({project_id: nextProps.project.project_id, chatroom: nextProps.project.chatroom, description: nextProps.project.description, image: nextProps.project.image});
    }
  }

  toggleButton(event) {
    this.setState({
      [event.target.name]: !this.state[event.target.name]
    });
  }

  createPanel(fieldtype) {
    return (
      <div>
        <hr/>
        <h4>{fieldtype}</h4>
        <ReactMarkdown source={this.props.project[fieldtype]}/>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="well" style={{
          background: "white"
        }}>
          <div>
            <img className="imageWrapper" src={this.props.project.image}/>
            <h1>
              {this.props.project.name}
            </h1>
          </div>
          {this.createPanel("chatroom")}
          {this.createPanel("image")}
          {this.createPanel("description")}
        </div>
      </div>
    );
  }
}

export default(ProjectEditPanel);
