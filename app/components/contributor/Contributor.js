import React from 'react';
import {connect} from 'react-redux'
import {getReposGithub, addProjectToCodeConnect} from '../../actions/mentor';
import TaskBlock from '../baukasten/Taskblock.js'
import EditPanel from '../baukasten/EditPanel.js';
import {Panel, NavItem, Nav, Row, Col} from "react-bootstrap";

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
      <div>
        {this.props.mockData.map((item) => {
          return <TaskBlock titel="function: max()" input={'# Hello world\n it\'s me, some markdown string \n\n ```js\n//but maybe i have code snippets too...\n```'} description="Get the max Value" output={"523"}/>
        })}
        <EditPanel/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {mockData: state.projects.mockData};
};

export default connect(mapStateToProps)(Contributor);
