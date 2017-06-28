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

class Mentor extends React.Component {
  constructor(props) {
    super(props);
  }

  //gets called, when the component gets loaded
  componentDidMount() {
    this.props.dispatch(getOrgsProject(this.props.user.token));
    this.props.dispatch(getUserProject(this.props.user.token));
  }

  render() {
    return (
      <div className="container" style={{
        borderRadius: '10px',
        background: 'white',
        padding: '50px'
      }}>

        <Row className="show-grid">
          <Col xs={12} md={4}>
            <MentorTable datatype="project" data={this.props.addAbleProjects}/>
          </Col>
          <Col xs={12} md={8}></Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.github, addAbleProjects: state.projects.addAbleProjects};
};

export default connect(mapStateToProps)(Mentor);
