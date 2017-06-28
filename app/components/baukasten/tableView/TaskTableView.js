import React, {Component} from "react"
import ListItem from "./ListItem.js"
import TaskPreview from "./TaskPreview.js"
import TableFilter from "./TableFilter.js"
import {Table, Panel} from "react-bootstrap"
import TableComponent from "./TableComponent.js"

/*
 * This component is responsible for displaying:
 * 		TableComponent, Table Preview
 *
 * Parameters:  **/

class TaskTableView extends Component {

  constructor(props) {
    super(props)
    this.default = {
      name: 'No Tasks available at the moment',
      description: 'The preview for the task will appear here!'
    }
    this.query = require('json-query')

    this.labels = [
      {
        labelName: "Project",
        labelSize: "3"
      }, {
        labelName: "Task",
        labelSize: "3"
      }, {
        labelName: "Status",
        labelSize: "1"
      }
    ]
    this.data = this.props.tasks.map((item) => {
      var temp = {
        id: item.task_id,
        data: ["ProjName", item.name, item.status]
      }
      return temp
    })

    this.state = {
      activeElement: this.props.tasks != []
        ? this.props.tasks[0]
        : this.default,
      showInnerProject: false
    }
  }

  filterTasks(func) {
    this.setState({current_tasks: this.props.tasks.filter(func)})
  }

  setActiveElement(taskid) {
    var element = this.props.tasks.find(x => (x.task_id === taskid))
    this.setState({
      activeElement: element == undefined
        ? this.default
        : element
    })
  }

  render() {
    const tableStyle = {
      borderRadius: "5px"
    }

    this.preview = (this.props.tasks.length !== 0)
      ? (
        <div className="row" style={{
          position: "absolute",
          top: "0",
        }}>
          <div className="visible-md-12 hidden-sm hidden-xs" style={{
            background: "rgb(255,255,255,0.9)",
            paddingLeft: "20px",
            paddingRight: "20px",
            position: "fixed",
            overflowY: "auto",
            borderRadius: "10px"
          }}>

            <TaskPreview title={this.state.activeElement.name} output={this.state.activeElement.output} description={this.state.activeElement.description} tags={this.state.activeElement.tags} input={this.state.activeElement.input}/>
          </div>
        </div>
      )
      : null;

    const outerView = <div className="row" style={{background: "white"}}>
      <div style={{
        background: "rgb(255,255,255,1)",
        borderRadius: "10px"
      }} className="col-md-4">

        <TableFilter filterTasks={this.filterTasks.bind(this)}/>

        <TableComponent setActiveElement={this.setActiveElement.bind(this)} route={""} labelList={this.labels} dataList={this.data}/>
      </div>

      <div className="col-md-8" style={{
      }}>
        {this.preview}

      </div>
    </div>

    return (
      <span>
        {!this.state.showInnerProject
          ? outerView
          : null
}
      </span>
    )
  }
}

export default TaskTableView
