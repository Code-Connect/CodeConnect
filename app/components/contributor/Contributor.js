import React from 'react';
import {connect} from 'react-redux'
import {getReposGithub, addProjectToCodeConnect} from '../../actions/mentor';
import TaskBlock from '../baukasten/Taskblock.js'
import EditPanel from '../baukasten/EditPanel.js';
import {browserHistory} from 'react-router'
import {
  Panel,
  NavItem,
  Nav,
  Row,
  Col,
  Glyphicon
} from "react-bootstrap";
//import TaskTable from '../baukasten/tableView/TableComponent'
import TableComponent from '../baukasten/tableView/TableComponent'
import TaskTableView from '../baukasten/tableView/TaskTableView'
import {Radio, FormControl, FormGroup, Breadcrumb} from 'react-bootstrap'
import ProjectTableView from '../baukasten/tableView/ProjectTableView'

class Contributor extends React.Component {
    constructor(props) {
    super(props);
    this.query = require('json-query')

    let showProjects = (this.props.location.pathname === "/contributor/projects")
    console.log(this.props.location.pathname+";"+showProjects)

    this.state = {
      showProjects: showProjects,
      tasks: this.query('projects.tasks', {
        data: {
          projects: this.props.projects
        }
      }).value,
      directory: ["ALL TASKS"],
      justSet: false
    }
  }


  componentWillReceiveProps(){
    var show = (this.props.location.pathname == "/contributor/projects")
    console.log("show"+this.state.showProjects)
    console.log("show"+this.props.location.pathname)
    console.log("justset"+ this.state.justSet)

    this.setState ( {
      showProjects: this.state.justSet? this.state.showProjects : show
    }, this.setState({justSet: false}))
  }

  toggleView(event) {
    var route = !this.state.showProjects? "/contributor/projects": "/contributor/tasks"
    console.log("pushing"+route)
    var dir = !this.state.showProjects
      ? ["PROJECTS"]
      : ["TASKS", "ALL"]
    this.setState({
      directory: dir,
      showProjects: !this.state.showProjects,
      justSet: true
    },
    function(){browserHistory.push(route)})
  }

  //gets called, when the component gets loaded
  componentDidMount() {
    //gets the repos from github
  }

  setActiveProject(name) {
    this.setState({
      directory: ["PROJECTS", name]
    })
  }

  render() {

    const taskTableView = <TaskTableView tasks={this.state.tasks}/>

    const projectTableView = <ProjectTableView setActiveProject={this.setActiveProject.bind(this)} projects={this.props.projects} tasks={this.props.tasks} flag="task" route="task" labelList={this.labels} dataList={this.data}/>

    return (
      <div style={{
        borderRadius: '10px',
        padding: '50px',
        paddingTop: '0px'
      }}>
        <div>
          <div className="row" style={{
            marginBottom: "20px"
          }}>
            <div className="col-sm-2" style={{
              background: "white",
              width: "200px",
              height: "30px",
              borderRadius: "5px"
            }}>
              <form>
                <FormGroup >
                  <Radio onChange={this.toggleView.bind(this)} checked={!this.state.showProjects} name="radiogrp" inline>
                    Tasks
                  </Radio>
                  {' '}
                  <Radio onChange={this.toggleView.bind(this)} checked={this.state.showProjects} name="radiogrp" inline>
                    Project
                  </Radio>

                </FormGroup>
              </form>
            </div>
            <div className="col-sm-4 " style={{
              marginLeft: "30px",
              background: "white",
              width: "300px",
              height: "30px",
              borderRadius: "5px"
            }}>
              <Breadcrumb style={{
                padding: "0px",
                background: "white"
              }}>
                {this.state.directory.map((item, index) => {
                  return <Breadcrumb.Item key={index} href="#">
                    {item}
                  </Breadcrumb.Item>
                })}
              </Breadcrumb>
            </div>
          </div>

          {this.state.showProjects
            ? projectTableView
            : taskTableView}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.addedProjects
  };
};

export default connect(mapStateToProps)(Contributor);
