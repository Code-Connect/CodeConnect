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
      <div>
        {this.props.project.name}
        <ReactMarkdown>{this.props.project.description}
        </ReactMarkdown>
        <a style={{
          padding: "10px",
          float: "right",
          borderRadius: "5px"
        }} className="btn-success" href={"/mentor/" + this.props.project.project_id}>Details</a>
      </div>
    )
  }
}

export default ProjectPanel;
