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
    const tagStyle = {
      color: "#2DC263"
    }

    return (
      <div className="col-md-0 hidden-sm hidden-xs well" style={{
				background: "white",
				marginTop: "30px"
      }} ref="Parent">

        <h5 style={tagStyle}>
          <small style={{
            padding: "0px"
          }}>
            <b>{this.props.tags.map((tag) => {
                return tag + " "
              })}</b>
          </small>
        </h5>
        <hr/>
        <div style={divStyle}>
          <h1>{this.props.title}</h1>
          <hr/><ReactMarkdown source={this.props.description}/>
        </div>
        <div style={divStyle}>
          <h4>Input</h4><hr/>
            <ReactMarkdown source={this.props.input}/>
        </div>
        <div style={divStyle}>
          <h4>Output</h4><hr/>
            <ReactMarkdown source={this.props.output}/>
        </div>
      </div>
    )

  }
}
export default TaskPreview
