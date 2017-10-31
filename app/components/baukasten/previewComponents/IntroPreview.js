import React, {Component} from "react"
import ReactDOM from 'react-dom'
import {Panel, Button} from "react-bootstrap"
import ReactMarkdown from 'react-markdown'
import TableComponent from '../tableView/TableComponent.js'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'

class ProjectPreview extends Component {

  constructor(props) {
    super(props)
    this.labelList = ["Task", "Status"]
  }

  render() {
    const divStyle = {
      margin: "0px 0px 30px 0px"
    }
    const tagStyle = {
      color: "#2DC263",
      padding: "0"
    }

    return (
      <div className="col-md-0 hidden-sm hidden-xs well" style={{
        background: "white",
        marginTop: "30px"
      }} ref="Parent">
        <div className="row container">
          <small style={tagStyle}>
            <b>{this.props.tags.map((tag) => {
                return tag + " "
              })}</b>
          </small>
        </div>
        <hr/>

        <div style={divStyle} className="row">
          <div className="col-sm-2">
            <img src="/img/Logo.png" height="48px" alt="icon"/>
          </div>
          <div className="col-sm-10">
            <h1 style={{
              marginTop: "0"
            }}>{this.props.title}</h1>
            <h4>
              <small><ReactMarkdown source={this.props.description}/></small>
            </h4>
          </div>
        </div>
      </div>
    )

  }
}
const mapStateToProps = (state) => {
  return {
    tags: [
      "#1", "#2", "#3"
    ],
    description: "Just showing off the description her",
    title: "A Really Nice Title Here"
  };
};
export default connect(mapStateToProps)(ProjectPreview);
