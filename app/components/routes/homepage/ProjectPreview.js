import React, {Component, PropTypes} from "react";
import {Panel, ListGroup, ListGroupItem, Button} from "react-bootstrap";

class ProjectPreview extends Component {
    render() {
        let task = this.props.tasks[0];

        return (
            <Panel
                header={<h3>{this.props.headerName}</h3>}
                   bsStyle="warning">
                <span style={{fontSize: "larger"}}>{this.props.description}</span>

                <Panel header={ <h5>Tasks</h5> }
                    //style={ {overflow: 'auto'} }
                       collapsible={ true }
                       defaultExpanded={ true }
                       bsStyle="success">
                    <ListGroup fill={ true }>
                        {this.makeListGroupItems(this.props.tasks)}
                    </ListGroup>

                </Panel>
                <Button bsStyle="success"
                        style={ {float: 'right'} }
                        href={task.link}>
                    <span>Contribute</span>
                </Button>
            </Panel>
        )
    }

    makeListGroupItems(tasks) {
        let listGroupItems;
        if (tasks && tasks.length > 0)
            listGroupItems = tasks.map((task) => {
                return (
                    <ListGroupItem
                        active={ false }
                        style={ {minHeight: '50px'} }>
                        <span>{task.name}</span>
                    </ListGroupItem>
                );
            });
        return listGroupItems;
    }

}
export default ProjectPreview;