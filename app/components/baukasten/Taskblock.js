import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button, Row, Col} from "react-bootstrap";

class TaskBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Panel header={(
                        <h3>{this.props.titel}</h3>
                    )} bsStyle="warning">
                        <Row className="show-grid">
                            <Col xs={6} md={4}>
                                <Panel header={(
                                    <h3>Input</h3>
                                )} bsStyle="success">
                                  <code>{JSON.stringify (this.props.input)}</code>
                                </Panel>
                                <Button bsStyle="success">More Information</Button>
                            </Col>
                            <Col xs={6} md={4}>
                                <Panel header={(
                                    <h3>Blackbox</h3>
                                )} bsStyle="success">
                                    {this.props.description}
                                </Panel>
                            </Col>
                            <Col xsHidden md={4}>
                                <div>
                                    <Panel header={(
                                        <h3>Output</h3>
                                    )} bsStyle="success">
                                    <code>{JSON.stringify (this.props.output)}</code>
                                    </Panel>
                                </div>
                            </Col>
                        </Row>
                    </Panel>
                </div>

            </div>
        );
    }
}

TaskBlock.defaultProps = {
    titel: "-",
    input: "-",
    description: "-",
    output: "-"
};

export default(TaskBlock);
