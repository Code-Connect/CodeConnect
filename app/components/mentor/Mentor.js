import React from 'react';
import {connect} from 'react-redux'
import {
  Button,
  FormGroup,
  InputGroup,
  FormControl,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import {getOrgsProject, getUserProject} from './../../actions/projectActions';
import MentorTable from './MentorTable';
import {addProject} from '../../actions/projectActions';

class Mentor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wantToAddProjects: [],
      addProjectToggle: false
    }
  }

  //gets called, when the component gets loaded
  componentDidMount() {
    this.props.dispatch(getOrgsProject(this.props.user.token));
    this.props.dispatch(getUserProject(this.props.user.token));
  }

  addProject(project) {
    console.log(project);
    this.props.dispatch(addProject(project));
  }

  toggleButton() {
    this.setState({
      addProjectToggle: !this.state.addProjectToggle
    });
  }

  render() {
    const addProjectMode = this.state.addProjectToggle
      ? (
        <div>
          <MentorTable onClick={this.addProject.bind(this)} datatype="project" data={this.props.addAbleProjects}/>
          <MentorTable onClick={() => {}} datatype="project" data={this.props.addedProjects}/>
          <Button onClick={this.toggleButton.bind(this)}>Done</Button>
        </div>
      )
      : (
        <div>
          <MentorTable onClick={() => {}} datatype="project" data={this.props.addedProjects}/>
          <Button onClick={this.toggleButton.bind(this)}>
            Add Projects from Github
          </Button>
        </div>
      )
    return (
      <div className="container" style={{
        borderRadius: '10px',
        background: 'white',
        padding: '50px'
      }}>

        <Row className="show-grid">
          <Col xs={12} md={4}>
            {addProjectMode}
          </Col>
          <Col xs={12} md={8}></Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.github, addAbleProjects: state.projects.addAbleProjects, addedProjects: state.projects.addedProjects};
};

export default connect(mapStateToProps)(Mentor);
