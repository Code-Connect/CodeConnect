import React, {Component} from "react";
import TableComponent from "./tableView/TableComponent.js";
import TaskPreviewList from './previewComponents/TaskPreviewList';
import {goToAnchor} from 'react-scrollable-anchor';
import {connect} from "react-redux";
import {getProjectByID, getTaskIDs, getTasksFromIDs, getTasksFromProjectID} from "../contributor/Json2Array";
import ProjectPreview from "./previewComponents/ProjectPreview";
import {getAddedProjects} from "./../stateConverter.js";
import {participateTask} from '../../actions/taskActions';

/*
 * This component is responsible for displaying:
 * 		TableComponent, Table Preview
 *
 * Parameters:  **/

class TaskTableView extends Component {

  constructor(props) {
    super(props)

    console.log("id" + this.props.params.id);
    console.log(this.props.projectDict[this.props.params.id]);

    this.state = {
      projID: this.props.params.id,
      project: this.props.projectDict[this.props.params.id],
      taskList: this.getTasksByProjectID(this.props.projectDict[this.props.params.id].tasks, this.props.tasks)
    };
  }

  setActiveElement(taskid) {}

  participate(task){
    console.log("dispatch action");
    //TODO hier muss task und user_id durchgegeben werden
    this.props.dispatch(participateTask(task));
  }

  getTasksByProjectID(taskIDArray, tasksJSON) {
    return taskIDArray.map((taskID) => {
      return tasksJSON[taskID];
    })
  }

  getTaskNamesFromTasks(taskArray) {
    return taskArray.map((task) => {
      return task.name;
    })
  }

  getTaskIDsFromTasks(taskArray) {
    return taskArray.map((task) => {
      return task.task_id;
    })
  }

  focusPreview(id) {
    goToAnchor("t" + id)
  }

  render() {
    return (
      <div className="row" style={{
        background: "white"
      }}>
        <div style={{
          background: "rgb(255,255,255,1)",
          borderRadius: "10px"
        }} className="col-md-4">

          <TableComponent goTo={"t"} onTableItemClicked={this.focusPreview.bind(this)} setActiveElement={this.setActiveElement.bind(this)} route={""} labelList={[{
              labelName: "Tasks",
              labelSize: '1'
            }
          ]} dataList={[{
              id: this.getTaskIDsFromTasks(this.state.taskList),
              data: this.getTaskNamesFromTasks(this.state.taskList)
            }
          ]}></TableComponent>
        </div>
        <div className="col-md-8" style={{}}>
          <ProjectPreview id={this.state.projID} key={this.state.projID} description={this.state.project.description} title={this.state.project.name} tags={['#coming', '#soon']} contributors={[]}/>
          <TaskPreviewList dataList={this.state.taskList} onClick={this.participate.bind(this)}></TaskPreviewList>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {projectDict: state.projects.projectDict, tasks: state.projects.tasks, user: state.user.github};
};

export default connect(mapStateToProps)(TaskTableView);
