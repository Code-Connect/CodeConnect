import React from 'react';
import {connect} from 'react-redux'
import {getReposGithub, addProjectToCodeConnect} from '../../actions/mentor';
import TaskBlock from '../baukasten/Taskblock.js'
import {Panel, NavItem, Nav, Row, Col} from "react-bootstrap";

class Contributor extends React.Component {
  constructor(props) {
    super(props);
  }

  //gets called, when the component gets loaded
  componentDidMount() {
    //gets the repos from github
    this.props.dispatch({type: 'INIT_TOGGLE'});
  }

  render() {
    return (
      <div>
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
  return {};
};

export default connect(mapStateToProps)(Contributor);
