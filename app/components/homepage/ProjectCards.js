import React from 'react';
import {connect} from 'react-redux'
import {Button, Panel, Col} from "react-bootstrap";
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
        <div className="panel-pCards container-pCards" onClick={() => {
          this.props.onClick()
        }}>
          <h3 className="headerWrapper">{this.props.project.name}</h3>
          <div className ="infoWrapper">
            <img className="imageWrapper" src={this.props.project.image}/>
            <ReactMarkdown className="textBox" source={this.props.project.description}/>
          </div>
        </div>
        <div className="footer-pCards">
          <p className ="footer-text-pCards">by {this.props.project.mentor_name}</p>
        </div>
      </div>
    );
  }
}

export default ProjectCards;
