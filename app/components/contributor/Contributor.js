import React from 'react';
import {connect} from 'react-redux'
import {getReposGithub, addProjectToCodeConnect} from '../../actions/mentor';
import TaskBlock from '../baukasten/Taskblock.js'
import {Panel, NavItem, Nav, Row, Col} from "react-bootstrap";
import TaskTable from '../baukasten/taskelement/TaskTable.js'

class Contributor extends React.Component {
  constructor(props) {
    super(props);
  }

  dropPanel() {
    this.props.dispatch({type: 'TOGGLE_PANEL'});
  }

  //gets called, when the component gets loaded
  componentDidMount() {
    //gets the repos from github
    this.props.dispatch({type: 'INIT_TOGGLE'});
  }

  render() {
    return (
      <div className="container" style={{background:'gray',padding: '50px'}}>
        <div className="row">
            <TaskTable/>
        </div>


        <TaskBlock titel="function: max()" input={[12, 344, 523, 123, 322]} description="Get the max Value" output={523}/>
        <TaskBlock titel="function: filter()" input={{
          Array1: [
            {
              name: "Alice",
              alter: 50
            }, {
              name: "Bob",
              alter: 30
            }
          ],
          Array2: [
            {
              name: "Alice",
              alter: 50
            }, {
              name: "Bob",
              alter: 50
            }
          ]
        }} description="Put same objects in seperate array" output={{
          Array1: {
            name: "Alice",
            alter: 50
          }
        }}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {toggle: state.messages.toggle, projects: state.projects.publicprojects, ccrepos: state.projects.ccrepos};
};

export default connect(mapStateToProps)(Contributor);
