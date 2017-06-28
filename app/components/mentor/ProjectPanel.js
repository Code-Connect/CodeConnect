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
              ProjectPanel
            </div>
        )
    }
}

export default ProjectPanel;
