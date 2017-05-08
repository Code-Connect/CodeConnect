import React from 'react';
import {Panel, Button, Col} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import SkyLight from 'react-skylight';
import EditPanel from './EditPanel';

//used in TaskBlock
class TaskPanelCol extends React.Component {
  render() {
    return (
      <Col xs={6} md={4}>
        <Panel header={(
          <div>
            <div>
              <Button className="pull-right" bsStyle="primary" bsSize="small" name="edit" onClick={() => this.refs.simpleDialog.show()}>Edit</Button>
              <SkyLight dialogStyle={{
                backgroundColor: '#00897B',
                color: '#ffffff',
                width: '70%',
                height: '600px',
                marginTop: '-300px',
                marginLeft: '-35%'
              }} hideOnOverlayClicked ref="simpleDialog" title="Hi, I'm a simple modal">
                Hello, I dont have any callback.
                <EditPanel/>
              </SkyLight>
            </div>
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
