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
      <div>
        <div className="headerWrapper">
          <h3>{this.props.project.name}</h3>
        </div>
        <br/>
        <br/>
        <ReactMarkdown source={this.props.project.description}/>
        <img className="avatar rounded-2" height="50" src={"/img/Logo.png"} width="50"/>

        <div className="btn-wrapper">
          <span className="btn btn-default newsPageProjektButton">To Project</span>
        </div>
      </div>
    );
  }
}

export default ProjectCards;
