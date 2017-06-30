import React, {Component} from "react"
import ReactDOM from 'react-dom'
import {Panel, Button} from "react-bootstrap"
import ReactMarkdown from 'react-markdown'
import TableComponent from './TableComponent.js'
import {browserHistory} from 'react-router'

class ProjectPreview extends Component {

  constructor(props) {
    super(props)
    this.labelList = ["Task", "Status"]
  }

  redirectDetails(){
      //browserHistory.push('/contributor/tasks/p'+this.props.id);
      console.log("redi")
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
      <div className="row">
        <div className="col-md-8"><h5>
          <small style={tagStyle}>
            <b>{this.props.tags.map((tag) => {
                return tag + " "
              })}</b>
          </small>
        </h5>
        </div>
        <div className="col-md-4">
        <a style={{padding: "10px", float: "right", borderRadius: "5px"}} className="btn-success" href={this.props.short != undefined? "/mentor/"+this.props.id:"/contributor/tasks/p"+this.props.id}>Details</a>
        </div>
        </div>
        <hr/>

        <div style={divStyle} className="row">
          <div className="col-sm-2">
            <img src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" alt="icon"/>
          </div>
          <div className="col-sm-10">
            <h1 style={{
              marginTop: "0"
            }}>{this.props.title}</h1>
            <h4><small><ReactMarkdown source={this.props.description}/></small></h4>
          </div>
        </div>

        {this.props.short != undefined ? null :<div style={divStyle}>
          <h4>Contributors</h4><hr/>
            {this.props.contributors.map((user) => {
                return <p>{user.name + ": " + user.email}</p>
              })}
        </div>
      }
        {this.props.short != undefined ? null: <div style={divStyle}>
          <h4>Tasks</h4><hr/>
          <TableComponent goTo="p" setActiveElement={() => {
            console.log("potential")
          }} labelList={this.labelList} route="task" dataList={this.props.tasks.map((task) => {
            return {
              id: task.task_id,
              data: [task.name, task.status]
            }
          })}/>
        </div>}
      </div>
    )

  }
}
export default ProjectPreview
