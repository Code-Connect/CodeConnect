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

class TaskPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            description: ''
        }
    }

    addTask(event) {
        this.props.addTask(this.state, this.props.projects.project_id);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div>
                    <button className="list-group-item" onClick={this.props.handleChange}>{this.props.projects.name}
                    </button>
                </div>
                <ul className="list-group">
                    {this.props.projects.tasks.map((item) => {
                        console.log(item);
                        return (
                            <div>
                                <Panel>{item.name}</Panel>
                                <Panel>{item.description}</Panel>
                            </div>
                        )
                    })}
                </ul>
                <Panel collapsible expanded={true}>
                    <Form horizontal>
                        <FormGroup name="task">
                            <Col componentClass={ControlLabel} sm={2}>
                                Task
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" name="task" placeholder="Task" onChange={this.handleChange.bind(this)}/>
                            </Col>
                        </FormGroup>

                        <FormGroup name="description">
                            <Col componentClass={ControlLabel} sm={2}>
                                Description
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" name="description" placeholder="Description" onChange={this.handleChange.bind(this)}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="submit" name="submit" value={this.state} onClick={this.addTask.bind(this)}>
                                    Submit
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel>
            </div>
        )
    }
}

TaskPanel.propTypes = {
    addTask: React.PropTypes.func,
    projects: React.PropTypes.shape({description: React.PropTypes.string, name: React.PropTypes.string, project_id: React.PropTypes.number, repourl: React.PropTypes.string})
}

TaskPanel.defaultProps = {
    projects: {
        tasks: []
    }
}

export default TaskPanel;
