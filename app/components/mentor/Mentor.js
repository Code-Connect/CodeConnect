import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button} from "react-bootstrap";
import {getOrgsProject, getUserProject} from './../../actions/projectActions';

class Mentor extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick(event) {
    this.props.dispatch(getOrgsProject(this.props.user.token));
    this.props.dispatch(getUserProject(this.props.user.token));
  }

  //gets called, when the component gets loaded
  componentDidMount() {
    this.props.dispatch(getOrgsProject(this.props.user.token));
    this.props.dispatch(getUserProject(this.props.user.token));
  }

  render() {
    return (
      <div>
        <Button onClick={this.onClick.bind(this)}>
          Press me
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.github};
};

export default connect(mapStateToProps)(Mentor);
