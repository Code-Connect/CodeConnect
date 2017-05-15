import React, {Component} from "react"
import ReactDOM from 'react-dom'
import {Panel} from "react-bootstrap"

class TaskPreview extends Component {

  constructor(props) {

    super(props)

  }

  //getStyle(){
  //    console.log(this.refs.Parent)
  //    if (this.refs.Parent == undefined){
  //        return {position: 'fixed', width: '100px'}
  //    }
  //    console.log("return val: "+ ("yeah"+this.refs.Parent.clientWidth+"px"))

  //    return {position: 'fixed', width: (this.refs.Parent.clientWidth+'px')}
  //}

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
