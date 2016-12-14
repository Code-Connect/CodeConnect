import React from 'react';
import {connect} from 'react-redux'
import {getReposGithub, addProjectsToCodeConnect, postProject, postTasksToProject} from './../../actions/mentor';
import {Panel} from "react-bootstrap";
import TaskPanel from "./TaskPanel";
import HelloWorld from "./HelloWorld";

class Mentor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            description: ''
        };
    }

    handleChange(event) {
      event.preventDefault();
      this.setState({[event.target.name]: event.target.value });
      console.log(this.state);
    }

    handleSubmit(event) {
        this.props.dispatch(postProject(this.props.ccrepos, this.props.github_id));
    }

    addProject(project) {
        this.props.dispatch(addProjectsToCodeConnect(project));
    }

    addTask(event) {
        console.log(this.state);
        event.preventDefault();
        // this.props.dispatch(postTasksToProject(ccrepo_id, "task", this.props.github_id));
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
                                            <Panel collapsible expanded={this.props.toggle}>
                                                {item.tasks[0].name}
                                            </Panel>
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
                                {this.props.ccrepos.map((item) => {
                                    return (<TaskPanel projects={item} handleChange={this.handleChange.bind(this)} addTask={this.addTask.bind(this)}/>);
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
    console.log("mentor map states to props");
    console.log(state);
    return {repos: state.projects.repos, ccrepos: state.projects.ccrepos, github_id: state.user.github.github_id, github_name: state.user.github.name};
};

export default connect(mapStateToProps)(Mentor);
