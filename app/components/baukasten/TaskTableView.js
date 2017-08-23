import React, {Component} from "react"
import TableComponent from "./tableView/TableComponent.js"
import TaskPreviewList from './previewComponents/TaskPreviewList'
import {goToAnchor} from 'react-scrollable-anchor'
import {connect} from "react-redux";
import {getProjectByID, getTaskIDs, getTasksFromIDs, getTasksFromProjectID} from "../contributor/Json2Array";
import ProjectPreview from "./previewComponents/ProjectPreview";
import {getAddedProjects} from "./../stateConverter.js"

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
        /*this.project = getProjectByID(this.projID, this.props.projects);

        if (!this.project) {
            this.project = {}
            this.project.description = "Project could not be found";
            this.project.name = "Oops something went wrong";
        }

        var tasks = getTasksFromProjectID(this.projID, this.props.projects, this.props.tasks);

        this.state = {
            tasks: tasks,
            data: tasks.map((item) => {
                return {
                    id: item.task_id,
                    data: ["ProjName", item.name, item.status]
                }
            })
        }

        getTaskIDs(this.projID, this.props.projects);

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
            }];*/

//getTasksFromIDs(this.props.projects)


        /*
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
         */
    }

    /*
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
     }*/

    setActiveElement(taskid) {
        /*var element = this.props.tasks.find(x => (x.task_id === taskid))
         this.setState({
         activeElement: element == undefined
         ? this.default
         : element
         })*/
    }

    getTasksByProjectID(taskIDArray, tasksJSON) {
        return taskIDArray.map(
            (taskID) => {
                return tasksJSON[taskID];
            }
        )
    }

    getTaskNamesFromTasks(taskArray) {
        return taskArray.map(
            (task) => {
                return task.name;
            }
        )
    }

    getTaskIDsFromTasks(taskArray){
        return taskArray.map(
            (task) => {
                return task.task_id;
            }
        )
    }

    focusPreview(id) {
        goToAnchor("t" + id)
    }

    render() {
        return (
            <div className="row" style={{background: "white"}}>
                <div style={{
                    background: "rgb(255,255,255,1)",
                    borderRadius: "10px"
                }} className="col-md-4">

                    <TableComponent goTo={"t"} onTableItemClicked={this.focusPreview.bind(this)}
                                    setActiveElement={this.setActiveElement.bind(this)} route={""}
                                    labelList={[{labelName: "Tasks", labelSize: '1'}]}
                                    dataList={
                                        [{
                                            id: this.getTaskIDsFromTasks(this.state.taskList),
                                            data: this.getTaskNamesFromTasks(this.state.taskList)
                                        }]
                                    }>
                    </TableComponent>
                </div>
                <div className="col-md-8" style={{}}>
                    <ProjectPreview id={this.state.projID}
                                    key={this.state.projID}
                                    description={this.state.project.description}
                                    title={this.state.project.name}
                                    tags={['#coming', '#soon']}
                                    contributors={[]}/>

                    <TaskPreviewList dataList={this.state.taskList}></TaskPreviewList>
                </div>
            </div>
        )
    }
}


{/*<TableFilter filterTasks={this.filterTasks.bind(this)*/
}
{ /*<TableComponent goTo={"t"} onTableItemClicked={this.focusPreview.bind(this)} setActiveElement={this.setActiveElement.bind(this)} route={""} labelList={this.labels} dataList={this.state.data}/>
 </div>

 <div className="col-md-8" style={{}}>
 <PreviewList flag="task" dataList={this.state.current_tasks}/>
 */
}


const mapStateToProps = (state) => {
    console.log(getAddedProjects(state));
    return {projectDict: state.projects.projectDict, tasks: state.projects.tasks};
};

export default connect(mapStateToProps)(TaskTableView);

