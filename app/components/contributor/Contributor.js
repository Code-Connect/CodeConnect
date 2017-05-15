import React from 'react';
import {connect} from 'react-redux'
import {getReposGithub, addProjectToCodeConnect} from '../../actions/mentor';
import TaskBlock from '../baukasten/Taskblock.js'
import EditPanel from '../baukasten/EditPanel.js';
import {Panel, NavItem, Nav, Row, Col} from "react-bootstrap";
import TaskTable from '../baukasten/taskelement/TaskTable.js'

class Contributor extends React.Component {
  constructor(props) {
    super(props);
  }

  //gets called, when the component gets loaded
  componentDidMount() {
    //gets the repos from github
  }

  render() {
    return (
      <div className="container" style={{
        borderRadius: '10px',
        background: 'white',
        padding: '50px'
      }}>
        <div className="row">
          <TaskTable tasks={this.props.tasks}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {tasks: state.projects.mockData};
};

export default connect(mapStateToProps)(Contributor);
