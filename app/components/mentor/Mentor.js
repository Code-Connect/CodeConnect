import React from 'react';
import {connect} from 'react-redux'
import {Panel, Button} from "react-bootstrap";
// import {getReposGithub, addProjectsToCodeConnect, postProject, postTasksToProject} from './../../actions/mentor';
import {getOrgsProject, getUserProject} from './../../actions/projectActions';


class Mentor extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick(event){
      console.log(event.target);
      this.props.dispatch(getOrgsProject(this.props.user.token));
      this.props.dispatch(getUserProject(this.props.user.token));

    }

    //gets called, when the component gets loaded
    componentDidMount() {
        //gets the repos from github
        this.props.dispatch(getReposGithub('https://api.github.com/user/orgs'));
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
