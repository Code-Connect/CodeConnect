import React from 'react';
import {connect} from 'react-redux'
import {getReposGithub, addProjectsToCodeConnect, postProject, postTasksToProject} from './../../actions/mentor';
import {Panel} from "react-bootstrap";
import TaskPanel from "./TaskPanel2";

class Mentor extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        this.props.dispatch(postProject(this.props.ccrepos, this.props.id));
    }

    addProject(project) {
        this.props.dispatch(addProjectsToCodeConnect(project));
    }

    addTask(state, ccrepo_id) {
        this.props.dispatch(postTasksToProject(ccrepo_id, state, this.props.id));
    }

    //gets called, when the component gets loaded
    componentDidMount() {
        //gets the repos from github
        this.props.dispatch(getReposGithub('https://api.github.com/users/' + this.props.github_name + '/repos'));
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="panel">
                        <div className="panel-heading">
                            <h3 className="panel-title">Not Added Projects</h3>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                {this.props.repos.map((item) => {
                                    return (
                                        <div>
                                            <button className="list-group-item" onClick={() => this.addProject(item)}>{item.name}</button>
                                        </div>
                                    );
                                })}
                            </ul>
                            <button className="btn btn-success" onClick={this.handleSubmit.bind(this)}>Update Project</button>
                        </div>

                        <div className="panel-heading">
                            <h3 className="panel-title">Your Code Connect Projects</h3>
                        </div>

                        <div className="panel-body">
                            <ul className="list-group">
                                {this.props.ccrepos.map((item, index) => {
                                    return (<TaskPanel projects={item} addTask={this.addTask.bind(this)}/>);
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {repos: state.projects.repos, ccrepos: state.projects.ccrepos, id: state.user.github.id, github_name: state.user.github.name};
};

export default connect(mapStateToProps)(Mentor);
