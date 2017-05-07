import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button, Row, Col} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import TaskPanelCol from './TaskPanelCol';

class TaskBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: true
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
              <TaskPanelCol panelType="Input" text={this.props.input} function={this.handleChange.bind(this)}/>
              <TaskPanelCol panelType="Description" text={this.props.description} function={this.handleChange.bind(this)}/>
              <TaskPanelCol panelType="Output" text={this.props.output} function={this.handleChange.bind(this)}/>
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

const mapStateToProps = (state) => {
  return {titel: "title", input: "input", description: "description", output: "output"};
};

export default(TaskBlock);
