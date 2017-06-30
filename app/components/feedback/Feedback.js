import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button} from "react-bootstrap";
import jsonQuery from "json-query"

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onClick(){
    console.log("triggerd");
    var hi = jsonQuery('projects[project_id=79136363]', {
      data: {
        projects: this.props.projects
      }
    }).value
    console.log(hi);
  }

  render() {
    return (
      <div>
        <Button onClick={this.onClick.bind(this)}>Hallo</Button>
        <Panel>Feedback</Panel>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    projects: state.projects.addedProjects
  };
};

export default connect(mapStateToProps)(Feedback);
