import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button, Row} from "react-bootstrap";
import TaskPanelCol from './TaskPanelCol';

class TaskBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }

  startTask(event) {
    this.setState({
      [event.target.name]: true
    }, () => {
      console.log("buttonclick")
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <Panel header={(
            <h3>{this.props.titel}</h3>
          )} bsStyle="warning">
            <Row className="show-grid">
              <TaskPanelCol panelType="Input" text={this.props.input} function={this.startTask.bind(this)}/>
              <TaskPanelCol panelType="Description" text={this.props.description}/>
              <TaskPanelCol panelType="Output" text={this.props.output}/>
            </Row>
            <Button bsStyle="success" name="edit" onClick={this.startTask.bind(this)}>Start Task</Button>
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
