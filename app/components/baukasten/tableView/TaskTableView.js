import React, {Component} from "react"
import ListItem from "./ListItem.js"
import TaskPreview from "./TaskPreview.js"
import TableFilter from "./TableFilter.js"
import {Table, Panel} from "react-bootstrap"
import TableComponent from "./TableComponent.js"
import PreviewList from './PreviewList'
import {goToAnchor} from 'react-scrollable-anchor'

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

    this.state = {
      activeElement: this.props.tasks != []
        ? this.props.tasks[0]
        : this.default,
      current_tasks: this.props.tasks,
      data: this.props.tasks.map((item) => {
        return {
          id: item.task_id,
          data: ["ProjName", item.name, item.status]
        }
      })}
  }

  getCurrentData() {
    var curTasks = this.state.current_tasks == undefined
      ? this.props.tasks
      : this.state.current_tasks
    return curTasks.map((item) => {
      return {
        id: item.task_id,
        data: ["ProjName", item.name, item.status]
      }
    })
  }

  filterTasks(func) {
    this.setState({
      current_tasks: this.props.tasks.filter(func)
    }, function() {
      this.setState({data: this.getCurrentData()})
    })
  }

  setActiveElement(taskid) {
    var element = this.props.tasks.find(x => (x.task_id === taskid))
    this.setState({
      activeElement: element == undefined
        ? this.default
        : element
    })
  }

  focusPreview(id) {
    goToAnchor("t" + id)
  }

  render() {
    return( <div className="row" style={{background:"white"}}>
    <div style={{
        background: "rgb(255,255,255,1)",
        borderRadius: "10px"
      }} className="col-md-4">
        <TableFilter filterTasks={this.filterTasks.bind(this)}/>

        <TableComponent goTo={"t"} onTableItemClicked={this.focusPreview.bind(this)} setActiveElement={this.setActiveElement.bind(this)} route={""} labelList={this.labels} dataList={this.state.data}/>
      </div>

      <div className="col-md-8" style={{}}>
        <PreviewList flag="task" dataList={this.state.current_tasks}/>

      </div>
    </div>
    )
  }
}

export default TaskTableView
