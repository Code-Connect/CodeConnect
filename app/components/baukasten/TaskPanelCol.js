import React from 'react';
import {Panel, Button, Col} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';

//used in TaskBlock
class TaskPanelCol extends React.Component {
  render() {
    return (
      <Col xs={6} md={4}>
        <Panel header={(
          <div>
            <Button className="pull-right" bsStyle="primary" bsSize="small" name="edit" onClick={this.props.function}>Edit</Button>
            <h3>{this.props.panelType}</h3>
          </div>
        )} bsStyle="success" onClick= {()=>{}}>
          <ReactMarkdown source={this.props.text}/>
        </Panel>
      </Col>
    )
  }
}

export default TaskPanelCol;
