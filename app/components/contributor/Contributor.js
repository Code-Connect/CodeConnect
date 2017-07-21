import React from "react";
import {connect} from "react-redux";
import {addProjectToCodeConnect} from "../../actions/mentor";
import {Breadcrumb, FormGroup, Radio} from "react-bootstrap";

class Contributor extends React.Component {
  constructor(props) {
    super(props);
    this.query = require('json-query')

    var pathname = this.props.location.pathname

    this.projID = this.props.params.id;


    this.state = {
      directory: ["ALL TASKS"],
      justSet: false
    }
  }

  componentWillReceiveProps() {
    var show = (this.props.location.pathname == "/contributor/projects")
    console.log("show" + this.state.showProjects)
    console.log("show" + this.props.location.pathname)
    console.log("justset" + this.state.justSet)

  }

  toggleView(event) {
    /*
    var route = !this.state.showProjects
      ? "/contributor/projects"
      : "/contributor/tasks"
    console.log("pushing" + route)
    var dir = !this.state.showProjects
      ? ["PROJECTS"]
      : ["TASKS", "ALL"]
    this.setState({
      directory: dir,
      showProjects: !this.state.showProjects,
      justSet: true
    }, function() {
      browserHistory.push(route)
    })
    */
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
    //const taskTableView = <TaskTableView tasks={this.state.tasks}/>

    //const projectTableView = <ProjectTableView setActiveProject={this.setActiveProject.bind(this)} projects={this.props.projects} flag="task" route="task"/>

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
                  <Radio onChange={this.toggleView.bind(this)} checked={false} name="radiogrp" inline>
                    Tasks
                  </Radio>
                  {' '}
                  <Radio onChange={this.toggleView.bind(this)} checked={true} name="radiogrp" inline>
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

            {this.props.children}

        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
    return {projects: state.projects.addedProjects, tasks: state.projects.tasks};
};

export default connect(mapStateToProps)(Contributor);

