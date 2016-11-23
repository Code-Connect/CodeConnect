import React, {Component, PropTypes} from "react";
import { connect } from 'react-redux';
import {
    Button,
    Panel,
    Input,
    Tab,
    Pagination,
    ListGroup,
    ListGroupItem,
    PageHeader
} from "react-bootstrap";

class YourTasks extends Component {

    render() {
        return (
            <div>
                <PageHeader>
                    <span>Your Tasks</span>
                </PageHeader>
                <Panel header={< h3 > <span>Code Connect</span> < /h3>}>
                    <Panel header={< h5 > <span>Tasks</span> < /h5>} collapsible={true} defaultExpanded={true} bsStyle="success">
                        <ListGroup fill={true}>
                            <ListGroupItem href="#" active={false} bsStyle="success">
                                <span>10: Search Functionality in Navigation Bar</span>
                                <Panel header={< h5 > <span>Review in Progress</span> < /h5>} style={{
                                    overflow: 'auto'
                                }} collapsible={true} defaultExpanded={true} bsStyle="warning">
                                    <ListGroup fill={true}>
                                        <ListGroupItem href="#">
                                            <span>Code Clarity:</span>
                                        </ListGroupItem>
                                        <ListGroupItem href="#">
                                            <span>Code Efficiency:</span>
                                        </ListGroupItem>
                                        <ListGroupItem href="#">
                                            <span>Documentation:</span>
                                        </ListGroupItem>
                                        <ListGroupItem href="#">
                                            <span>Recommendations:</span>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Panel>
                            </ListGroupItem>
                            <ListGroupItem href="#" active={false}>
                                <span>12: Improve load times</span>
                            </ListGroupItem>
                            <ListGroupItem href="#" active={false} bsStyle="success">
                                <span>16: Redesign Icon</span>
                                <Panel header={< h5 > <span>FeedBack</span> < /h5>} style={{
                                    overflow: 'auto'
                                }} collapsible={true} defaultExpanded={true} bsStyle="warning">
                                    <ListGroup fill={true}>
                                        <ListGroupItem href="#">
                                            <span>Code Clarity:</span>
                                        </ListGroupItem>
                                        <ListGroupItem href="#">
                                            <span>Code Efficiency:</span>
                                        </ListGroupItem>
                                        <ListGroupItem href="#">
                                            <span>Documentation:</span>
                                        </ListGroupItem>
                                        <ListGroupItem href="#">
                                            <span>Recommendations:</span>
                                            <span>Try more Refactoring</span>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Panel>
                                <Panel header={< h5 > <span>Rate your Mentor</span> < /h5>} style={{
                                    overflow: 'auto'
                                }} collapsible={true} defaultExpanded={true} bsStyle="warning">
                                    <ListGroup fill={true}>
                                        <ListGroupItem href="#">
                                            <Button bsStyle="success">
                                                <span>Submit</span>
                                            </Button>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Panel>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>
                </Panel>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(YourTasks);
