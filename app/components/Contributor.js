import React from 'react';
import {connect} from 'react-redux'
import {getReposGithub, addProjectsToCodeConnect, postProject} from '../actions/mentor';
import {Panel} from "react-bootstrap";

class Contributor extends React.Component {
    constructor(props) {
        super(props);
    }

    dropPanel() {
        console.log("dropPanel");
        this.props.dispatch({type: 'TOGGLE_PANEL'});
    }

    //gets called, when the component gets loaded
    componentDidMount() {
        //gets the repos from github
        this.props.dispatch({type: 'INIT_TOGGLE'});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="panel">
                        <div className="panel-heading">
                            <h3 className="panel-title">Code Connect Projects</h3>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                              {
                                this.props.projects.map((item) => <div>
                                    <div>
                                        <button className="list-group-item" onClick={() => this.dropPanel()}>{item.headerName}</button>
                                    </div>
                                    <Panel collapsible expanded={this.props.toggle}>
                                        {item.tasks[0].name}
                                    </Panel>
                                </div>)
                              }
                            </ul>
                            <button className="btn btn-success" onClick={this.dropPanel.bind(this)}>Update Project</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("contirbutor map states to props");
    console.log(state);

    return {toggle: state.messages.toggle, projects: state.projects.publicprojects};
};

export default connect(mapStateToProps)(Contributor);
