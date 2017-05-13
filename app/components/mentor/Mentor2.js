import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import EditPanel from '../baukasten/EditPanel.js';
import {updateText} from './../../actions/editor';

class Mentor2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: false,
      output: false,
      description: false
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: !this.state[event.target.name]
    }, () => {
      console.log(this.state)
    });
  }

  updateText(code) {
   this.props.dispatch(updateText(code));
   console.log(this.props.text);
 }

  createPanel(type) {
    const editPanel = this.state[type]
      ? (<ReactMarkdown source={this.props.data[type]}/>)
      : (<EditPanel onChange= {this.updateText.bind(this)} text ={this.props.text}/>);
    return (
      <div>
        <div>
          <Panel header={(
            <div>
              <Button name={type} className="pull-right" onClick={this.handleChange.bind(this)}>Edit</Button>
              <h4>{type}</h4>
            </div>
          )}>
            {editPanel}
          </Panel>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Panel header={< h1 > {
          this.props.data.name
        } < /h1>} bsStyle="warning">
          {this.createPanel("input")}
          {this.createPanel("output")}
          {this.createPanel("description")}
        </Panel>
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
  return {data: state.projects.mockData[0], text: state.editor.text};
};

export default connect(mapStateToProps)(Mentor2);
