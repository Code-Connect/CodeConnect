import React from 'react';
import {connect} from 'react-redux'
import {getReposGithub, addProjectsToCodeConnect} from '../actions/mentor';

class Mentor extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    addProject(project) {
        console.log("added project to codeconnect");
        this.props.dispatch(addProjectsToCodeConnect(project));
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
                                        <button className="list-group-item" onClick={() => this.addProject(item)}>{item.name}</button>
                                    );
                                })}
                            </ul>
                            <button className="btn btn-success" onClick={this.handleSubmit.bind(this)}>Upload Project</button>
                        </div>

                        <div className="panel-heading">
                            <h3 className="panel-title">Your Code Connect Projects</h3>
                        </div>

                        <div className="panel-body">
                            <ul className="list-group">
                                {this.props.repos.map(function(item) {
                                    return (
                                        <li className="list-group-item">
                                            <span className="tag tag-default tag-pill float-xs-right">{item.name}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                            <button className="btn btn-success" onClick={this.handleSubmit.bind(this)}>Upload Project</button>
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

    return {repos: state.projects.repos, github_name: state.user.github.name};
};

export default connect(mapStateToProps)(Mentor);
