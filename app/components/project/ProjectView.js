import React, {Component} from "react";
import {browserHistory} from 'react-router';
import {Button} from 'react-bootstrap';
import {connect} from "react-redux";
import ReactMarkdown from 'react-markdown';
import {getProject} from '../../actions/projectActions';

/*
** Required Parameters: tags: [string], contributors: [{name: string, email: string}], tasks: [Tasks], title: string
 */

class ProjectView extends Component {

  constructor(props) {
    super(props);
  }

  redirectDetails() {
    // browserHistory.push('/contributor/projects/' + this.props.id);
    this.props.dispatch(getProject(this.props.params.project_id));
  }

  render() {

    return (
      <div>
        <Button onClick={this.redirectDetails.bind(this)}>Content</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {project: state.currentProject.tasks};
};

export default connect(mapStateToProps)(ProjectView)
