import React, {Component} from "react"
import ListItem from "./tableView/ListItem.js"
import TaskPreview from "./previewComponents/TaskPreview.js"
import ProjectPreview from "./previewComponents/ProjectPreview.js"
import TableFilter from "./filterComponents/TableFilter.js"
import {Table, Panel} from "react-bootstrap"
import TableComponent from "./tableView/TableComponent.js"
import ProjectPreviewList from "./previewComponents/ProjectPreviewList"
import {goToAnchor} from "react-scrollable-anchor"
import {connect} from "react-redux";
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
      },
      {
        labelName: "#Contributor",
        labelSize: "1"
      }, {
        labelName: "Status",
        labelSize: "1"
      }
    ]
    var data = this.props.projects.map((item) => {
        return {
          id: item.id,
          data: [item.name, item.tasks.length, "Test2", "not implemented"]
        }
      })
    this.state = {
      activeElement: this.props.projects != []
        ? this.props.projects[0]
        : this.default,
      current_projects: this.props.projects,
      data: data
    }
  }
  getCurrentData() {
    var curProjects = this.state.current_projects == undefined
      ? this.props.projects
      : this.state.current_projects
    return curProjects.map((item) => {
      return {
        id: item.task_id,
        data: [item.name, item.tasks.length, item.contributors.length, item.status]
      }
    })
  }
  filterTasks(func) {
    this.setState({
      current_projects: this.props.projects.filter(func)
    }, function() {
      this.setState({data: this.getCurrentData()})
    })  }

  setActiveElement(projectid) {
    var element = this.props.projects.find(x => (x.id === projectid))
    this.setState({
      activeElement: element == undefined
        ? this.default
        : element
    })
  }

  focusPreview(id) {
    this.props.goToScrollable("p" + id)
  }


  render() {
    return (
      <div className="row" style={{background:"white"}}>
        <div style={{
          background: "rgb(255,255,255,1)",
          borderRadius: "10px"
        }} className="col-md-4">

          <TableComponent goTo={"p"} onTableItemClicked={this.focusPreview.bind(this)} setActiveElement={this.setActiveElement.bind(this)} route={""} labelList={this.labels} dataList={this.state.data}/>
        </div>

        <div className="col-md-8" style={{
        }}>
            <ProjectPreviewList dataList={this.state.current_projects}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {projects: state.projects.addedProjects, tasks: state.projects.tasks};
};

export default connect(mapStateToProps)(ProjectTableView);

