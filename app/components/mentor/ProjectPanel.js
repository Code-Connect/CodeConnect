import React from 'react';
import {
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Col
} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import ProjectPreview from '../baukasten/tableView/ProjectPreview'

class ProjectPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      description: ''
    }
  }

  onClick() {
    console.log("hi");
  }

  render() {
    return (
      <ProjectPreview short={true} tags={[]} id={this.props.project.id} title={this.props.project.name} description={this.props.project.description}/>
    )
  }
}

export default ProjectPanel;
