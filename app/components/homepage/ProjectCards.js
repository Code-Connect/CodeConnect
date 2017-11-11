import React from 'react';
import {connect} from 'react-redux'
import {Button, Panel, Table, Image} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';

class ProjectCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const description = this.props.project.description
      ? this.props.project.description
      : "";
    return (
      <Panel className="newsPageSinglePanel myWrapper" onClick={() => {
        this.props.onClick()
      }}>
        <div className="col">
          <img className="avatar rounded-2 imageWrapper" height="50" src={"/img/Logo.png"} width="50"/>
        </div>
        <div className="col">
          <h3 className="headerWrapper">{this.props.project.name}</h3>
          <ReactMarkdown className="textBox" source={this.props.project.description}/></div>
      </Panel>
    );
  }
}

export default ProjectCards;
