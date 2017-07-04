import React from 'react';
import {
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Col
} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import ProjectPreview from '../baukasten/tableView/ProjectPreview'
import ScrollableAnchor from 'react-scrollable-anchor'


class ProjectPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      description: ''
    }
  }
  render() {

    const tagStyle = {
      color: "#2DC263",
      padding: "0"
    }
    const divStyle = {
      margin: "0px 0px 30px 0px"
    }
    return (
      <div className="well" style={{
        background: "white",
      }} ref="Parent">
      <div className="row">
        <div className="col-sm-9"><h5>
          <small style={tagStyle}>
            <b>{this.props.project.tags != undefined?this.props.project.tags.map((tag) => {
                return tag + " "
              }):null}</b>
          </small>
        </h5>
        </div>
        <div className="col-sm-3">
        <a style={{padding: "10px", float: "right", borderRadius: "5px"}} className="btn-success" href={this.props.short != undefined? ("/mentor/"+this.props.id):("/contributor/tasks/p"+this.props.id)}>Details</a>
        </div>
        </div>
        <hr style={{marginTop:"5px"}}/>

        <div style={divStyle} className="row">
          <div className="col-sm-2">
            <img src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" alt="icon"/>
          </div>
          <div className="col-sm-10">
            <h1 style={{
              marginTop: "0"
            }}>{this.props.project.name}</h1>
            <h4><small><ReactMarkdown source={this.props.project.description}/></small></h4>
          </div>
        </div>

    </div>
    )
  }
}

export default ProjectPanel;
