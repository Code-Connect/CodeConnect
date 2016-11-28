import React from 'react';
import {connect} from 'react-redux'
import {getRequest} from '../actions/mentor';

class Mentor extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(getRequest('https://api.github.com/users/gapsong/repos'));
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="panel">
                        <div className="panel-heading">
                            <h3 className="panel-title">Mentor</h3>
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
                            <input type="submit" value="Submit"/>
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
    console.log(state.projects);
    return {repos: state.projects};
};

export default connect(mapStateToProps)(Mentor);
