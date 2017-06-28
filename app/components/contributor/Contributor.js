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
    tasks: state.tasks.mockData,
    projects: [
      {
        name: "Hello SECOND for Everyone!",
        id: 2,
        contributors: [
          {
            name: "Frank Lu",
            email: "frankz.lu@gmail.com"
          }, {
            name: "Schwaanz",
            email: "schwanz@gmail.com"
          }
        ],
        description: "This is a list of aaallll the SECOND Hello World Tasks. It is just a description, but hey, it is something",
        tags: [
          "#haGay", "#yeeah", "#getschwifty"
        ],
        data: "2017",
        tasks: [

          {
            name: "Task10",
            task_id: 10,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 12,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 13,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 14,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 15,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 16,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 17,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 18,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 19,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }

        ]
      }, {
        name: "Hello World for Everyone!",
        id: 1,
        data: "2017",
        tags: [
          "#haGay", "#yeeah", "#getschwifty"
        ],
        contributors: [
          {
            name: "Khiem Ton",
            email: "derTon@gmail.com"
          }, {
            name: "Schwaanz 456",
            email: "schwanzPower456@gmail.com"
          }
        ],
        description: "this is made by Mr ton and mr schwanzpower456. Have fun writing Hello World Programs! Yeeeaaah! ~",
        tasks: [

          {
            name: "Task1",
            task_id: 1,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 2,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 3,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 4,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 5,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 6,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 7,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 8,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 9,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }

        ]
      }

    ]

  };
};

export default connect(mapStateToProps)(Contributor);
