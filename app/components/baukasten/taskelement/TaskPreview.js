import React, {Component} from "react"
import ReactDOM from 'react-dom'
import {Panel} from "react-bootstrap"
import ReactMarkdown from 'react-markdown'

class TaskPreview extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const divStyle = {
      margin: "0px 0px 30px 0px"
    }
    const divStyl = {
      margin: "0px 0px 10px 0px",
      boxShadow: "0 0px 4px 0 rgba(0, 0, 1, 0.2)",
      borderRadius: "5px",
      padding: "5px 20px 5px 20px"
    }

    const tagStyle = {
      color: "#2DC263"
    }

    return (
      <div className="col-md-0 hidden-sm hidden-xs" style={{
        width: '100%'
      }} ref="Parent">
        <small style={{
          padding: "0px"
        }}>
          <h6 style={tagStyle}>
            <b>{this.props.tags.map((tag) => {
                return tag + " "
              })}</b>
          </h6>
        </small>
        <hr/>
        <div style={divStyle}>
          <h3>{this.props.title}</h3>
          <small><hr/><ReactMarkdown source={this.props.description}/></small>
        </div>
        <div style={divStyle}>
          <h4>Input</h4><hr/>
          <small><ReactMarkdown source={this.props.input}/></small>
        </div>
        <div style={divStyle}>
          <h4>Output</h4><hr/><ReactMarkdown source={this.props.output}/></div>
      </div>
    )

  }
}
export default TaskPreview
