import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import EditPanel from '../baukasten/EditPanel.js';

class Mentor2 extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   code: props.code
    // }
  }

  render() {
    return (
      <div>
        <Panel header={< h1 > {
          this.props.data.name
        } < /h1>} bsStyle="warning">
          <Panel header={(
            <div>
              <Button className="pull-right">Click</Button>
              <h5>Input</h5>
            </div>
          )}>
            <ReactMarkdown source={this.props.data.input}/></Panel>
          <Panel header={< h5 > Output < /h5>}>
            <ReactMarkdown source={this.props.data.output}/></Panel>
          <Panel header={< h5 > Description < /h5>}>
            <ReactMarkdown source={this.props.data.Description}/></Panel>
        </Panel>
        <EditPanel/>
      </div>
    );
  }
}

// data = {input: string,
//         output: string,
//         description: string,
//         task_id: integer,
//         name: string}

const mapStateToProps = (state) => {
  return {data: state.projects.mockData[0]};
};

export default connect(mapStateToProps)(Mentor2);
