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

const TaskPanel = React.createClass({
    propTypes: {
        addTask: React.PropTypes.func,
        projects: React.PropTypes.shape({description: React.PropTypes.string, name: React.PropTypes.string, repoid: React.PropTypes.number, repourl: React.PropTypes.string})
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
                    <button className="list-group-item" onClick={() => this.dropPanel()}>{this.props.projects.name}
                    </button>
                </div>
                <Panel collapsible expanded={true}>
                    {/* <button className="list-group-item" onClick={this.props.addTask}>
                        Add Task
                    </button> */}
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Task
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder="Task"/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                                Description
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder="Description"/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="submit" onClick={this.props.addTask}>
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
