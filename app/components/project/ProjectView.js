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

  redirectDetails() {
    var project_id = this.props.params.project_id;
    this.props.dispatch(getProject(project_id));
    this.props.dispatch(getTasks(project_id));
  }

  render() {

    return (
      <div>
        <Button onClick={this.redirectDetails.bind(this)}>Content</Button>
        <Panel>Yo</Panel>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {project: state.currentProject.tasks};
};

export default connect(mapStateToProps)(ProjectView)
