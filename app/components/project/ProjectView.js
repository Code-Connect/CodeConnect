import React, {Component} from "react";
import {browserHistory} from 'react-router';
import {Button, Panel} from 'react-bootstrap';
import {connect} from "react-redux";
import ReactMarkdown from 'react-markdown';
import {getProject} from '../../actions/projectActions';
import {getTasks} from '../../actions/taskActions';

/*
** Required Parameters: tags: [string], contributors: [{name: string, email: string}], tasks: [Tasks], title: string
 */

class ProjectView extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var project_id = this.props.params.project_id;
    this.props.dispatch(getProject(project_id));
    this.props.dispatch(getTasks(project_id));
  }

  render() {
    const projectPanel = this.props.currentProject.loading
      ? <div>loading</div>
      : <ProjectPanel project={this.props.currentProject.project}></ProjectPanel>;

    const taskPanel = this.props.currentTasks.loading
      ? <div>loading</div>
      : <div>{this.props.currentTasks.tasks.map((item) => {
          return (<TaskPanel task={item}/>)
        })}</div>;
        
    return (
      <div >
        <h1>Project:
        </h1>
        {projectPanel}
        <hr/>
        <h1>Task:
        </h1>
        {taskPanel}
      </div>
    )
  }
}

class ProjectPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Panel>
        {this.props.project.name}
      </Panel>
    )
  }
}

class TaskPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Panel>
        <h3>{this.props.task.name}</h3>
        <br/> {this.props.task.input}
        <br/> {this.props.task.output}
        <br/> {this.props.task.description}
      </Panel>
    )
  }
}

const mapStateToProps = (state) => {
  return {currentProject: state.currentProject, currentTasks: state.currentTasks};
};

export default connect(mapStateToProps)(ProjectView)
