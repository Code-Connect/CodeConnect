import React, {Component} from "react"
import ListItem from "./ListItem.js"
import TaskPreview from "./TaskPreview.js"
import ProjectPreview from "./ProjectPreview.js"
import TableFilter from "./TableFilter.js"
import {Table, Panel} from "react-bootstrap"
import TableComponent from "./TableComponent.js"

/*
 * This component is responsible for displaying:
 * 		TableComponent, Table Preview
 *
 * Parameters: labelList 		= [ {labelName: "XX", labelSize: 1}, ... ]
 * 						 dataList	= [ {id: ..., data: ["attr1", "attr2", "at.."]}, ... ]
 * 						 route				= "task"
 * 						 flag					= "task"/"project"
 **/

class ProjectTableView extends Component {

  constructor(props) {
    super(props)
    this.default = {
      name: 'No Tasks available at the moment',
      description: 'The preview for the task will appear here!',
      tasks: []
    }

    this.state = {
      activeElement: this.props.projects.length != 0
        ? this.props.projects[0]
        : this.default
    }

    this.labels = [
      {
        labelName: "Project",
        labelSize: "3"
      }, {
        labelName: "#Task",
        labelSize: "3"
      }, {
        labelName: "Difficulty",
        labelSize: "1"
      }, {
        labelName: "#Contributor",
        labelSize: "1"
      }, {
        labelName: "Status",
        labelSize: "1"
      }
    ]
    this.data = this.props.projects.map((item) => {
      var temp = {
        id: item.id,
        data: [item.name, item.tasks.length, item.difficulty, item.contributors.length, item.status]
      }
      return temp
    })
  }

  filterTasks(func) {
    this.setState({current_tasks: this.props.tasks.filter(func)})
  }
  setActiveElement(projectid) {
    var element = this.props.projects.find(x => (x.id === projectid))
    console.log(element)
    this.setState({
      activeElement: element == undefined
        ? this.default
        : element
    })
    this.props.setActiveProject(element.name)
  }

  render() {
    const tableStyle = {
      borderRadius: "5px"
    }

    this.preview = (this.props.tasks.length !== 0)
      ? (
        <div className="row" style={{
          position: "absolute",
          top: "0"
        }}>
          <div className="visible-md-12 hidden-sm hidden-xs" style={{
            background: "rgb(255,255,255,0.9)",
            paddingLeft: "20px",
            paddingRight: "20px",
            position: "fixed",
            overflowY: "auto",
            borderRadius: "10px"
          }}>

            <ProjectPreview title={this.state.activeElement.name} description={this.state.activeElement.description} tags={this.state.activeElement.tags} contributors={this.state.activeElement.contributors} tasks={this.state.activeElement.tasks}/>
          </div>
        </div>
      )
      : null;

    return (
      <div className="row">
        <div style={{
          background: "rgb(255,255,255,0.9)",
          borderRadius: "10px"
        }} className="col-md-6">

          <TableComponent setActiveElement={this.setActiveElement.bind(this)} route={""} labelList={this.labels} dataList={this.data}/>
        </div>

        <div className="col-md-6" style={{
          paddingLeft: "40px"
        }}>
          {this.preview}

        </div>
      </div>
    )
  }
}

export default ProjectTableView
