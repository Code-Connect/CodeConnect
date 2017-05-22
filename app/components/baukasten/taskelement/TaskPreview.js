import React, {Component} from "react"
import ReactDOM from 'react-dom'
import {Panel} from "react-bootstrap"

class TaskPreview extends Component {

  constructor(props) {

    super(props)

  }

  render() {

    return (
      <div className="col-md-0" style={{
        width: '100%'
      }} ref="Parent">
        <Panel header={this.props.title}>
          {this.props.description}
        </Panel>
      </div>
    )

  }

}
export default TaskPreview
