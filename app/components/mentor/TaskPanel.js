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

const Mentor2 = React.createClass({
    getInitialState() {
        return this.state = {
            task: '',
            description: ''
        }
    },

    propTypes: {
        addTask: React.PropTypes.func,
        handleChange: React.PropTypes.func,
        projects: React.PropTypes.shape({description: React.PropTypes.string, name: React.PropTypes.string, project_id: React.PropTypes.number, repourl: React.PropTypes.string})
    },

    getDefaultProps() {
        return {
            projects: {
                description: 'No Description'
            }
        };
    },

    render() {
        return (
            <div>
                <div>
                    <button className="list-group-item" onClick={this.props.handleChange}>{this.props.projects.name}
                    </button>
                </div>
                <Panel collapsible expanded={true}>
                    <Form horizontal>
                        <FormGroup name="task">
                            <Col componentClass={ControlLabel} sm={2}>
                                Task
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" name="task" placeholder="Task" id={this.props.projects.project_id} onChange={this.props.handleChange}/>
                            </Col>
                        </FormGroup>

                        <FormGroup name="description">
                            <Col componentClass={ControlLabel} sm={2}>
                                Description
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" name="description" placeholder="Description" id={this.props.projects.project_id} onChange={this.props.handleChange}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="submit" name="submit" project_id={this.props.project_id} onClick={this.props.addTask}>
                                    Submit
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel>
            </div>
        )
    }
})

export default TaskPanel;
