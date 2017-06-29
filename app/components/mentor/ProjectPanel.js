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

    render() {
        return (
            <div>
              {this.props.project.name}
              <ReactMarkdown>{this.props.project.description} </ReactMarkdown>
            </div>
        )
    }
}

export default ProjectPanel;
