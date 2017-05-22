import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button, Row} from "react-bootstrap";
import TaskPanelCol from './TaskPanelCol';
import SkyLight from 'react-skylight';
import EditPanel from './EditPanel';

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
    });
  }

  render() {
    var myBigGreenDialog = {
      backgroundColor: '#D3D3D3',
      color: '#80ffffff',
      width: '95%',
      height: '570px',
      // marginTop: '-21.5%',
      marginTop: '-280px',
      marginLeft: '-47.5%'
    };

    var overlayStyles = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 99,
      backgroundColor: 'rgba(0,0,0,0.3)'
    }

    return (
      <div>
        <div className="container">
          <Panel header={(
            <div>
              <Button className="pull-right" style={{
                textAlign: 'center',
              }} bsStyle="warning" bsSize="small" name="edit" onClick={() => this.refs.customDialog.show()}>Edit</Button>
              <SkyLight overlayStyles={overlayStyles} dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="customDialog" title="Markdown-Editor">
                <EditPanel/>
              </SkyLight>
              <h4>{this.props.titel}</h4>
            </div>
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
