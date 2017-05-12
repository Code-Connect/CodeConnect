import React from 'react';
import {Panel, Button, Col} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';

//used in TaskBlock
class TaskPanelCol extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col xs={6} md={4}>
        <Panel header={(
          <h3>{this.props.panelType}</h3>
        )} bsStyle="success" onClick= {()=>{}}>
          <ReactMarkdown source={this.props.text}/>
        </Panel>
      </Col>
    )
  }
}

export default TaskPanelCol;
