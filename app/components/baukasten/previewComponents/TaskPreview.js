import React, {Component} from "react"
import ReactDOM from 'react-dom'
import {Panel, Button} from "react-bootstrap"
import ReactMarkdown from 'react-markdown'

class TaskPreview extends Component {

  constructor(props) {
    super(props)

  }

  onClick(event){
    console.log("clicked");
    this.props.onClick();
  }

  render() {
    const divStyle = {
      margin: "0px 0px 30px 0px"
    }
    const tagStyle = {
      color: "#2DC263"
    }

    return (
      <div className="well" style={{
        background: "white",
        marginTop: "30px"
      }} ref="Parent">

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
        <hr/>
        <Button bsStyle="success" onClick= {this.onClick.bind(this)}>Participate</Button>
      </div>
    )

  }
}
export default TaskPreview
