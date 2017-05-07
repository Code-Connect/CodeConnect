import React from 'react';
import {Panel, Button, Row, Col} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';

class TaskPanelCol extends React.Component {
  render() {
    return this.props.panelType == 'Input'
      ? (
        <Col xs={6} md={4}>
          <Panel header={(
            <h3>{this.props.panelType}</h3>
          )} bsStyle="success">
            <ReactMarkdown source={this.props.text}/>
          </Panel>
          <Button bsStyle="success" name="edit" onClick={this.props.function.bind(this)}>Edit</Button>
        </Col>
      )
      : <Col xs={6} md={4}>
        <Panel header={(
          <h3>{this.props.panelType}</h3>
        )} bsStyle="success">
          <ReactMarkdown source={this.props.text}/>
        </Panel>
      </Col>;
  }
}

export default TaskPanelCol;
