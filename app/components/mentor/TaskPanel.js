import React from 'react';
import {Panel} from "react-bootstrap";

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
                    <button className="list-group-item" onClick={this.props.addTask}>
                        Add Task
                    </button>
                </Panel>
            </div>
        )
    }
})

export default TaskPanel;
