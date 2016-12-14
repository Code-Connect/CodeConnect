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
        handleChange: React.PropTypes.func,
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
                                <FormControl type="text" name="task" placeholder="Task" onChange = {this.props.handleChange}/>
                            </Col>
                        </FormGroup>

                        <FormGroup name="description">
                            <Col componentClass={ControlLabel} sm={2}>
                                Description
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" name="description" placeholder="Description" onChange = {this.props.handleChange}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="submit" name="submit" onClick={this.props.addTask}>
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
