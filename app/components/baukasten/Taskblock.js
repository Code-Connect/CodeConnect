import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button, Row, Col} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';

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
                  <ReactMarkdown source={this.props.input}/>
                </Panel>
                <Button bsStyle="success">More Information</Button>
              </Col>
              <Col xs={6} md={4}>
                <Panel header={(
                  <h3>Description</h3>
                )} bsStyle="success">
                  <ReactMarkdown source={this.props.description}/>
                </Panel>
              </Col>
              <Col xs={6} md={4}>
                <div>
                  <Panel header={(
                    <h3>Output</h3>
                  )} bsStyle="success">
                    <ReactMarkdown source={this.props.output}/>
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
