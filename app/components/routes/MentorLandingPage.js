import React from 'react';
import {connect} from 'react-redux'
import {submitRepo} from '../../actions/mentor';

class MentorLandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        console.log("send repo");
        event.preventDefault();
        this.props.dispatch(submitRepo("link"));
    }

    render() {
        var todos = ['project1', 'project 2', 'project3', 'project4'];
        return (
            <div>
                <div className="container">
                    <div className="panel">
                        <div className="panel-heading">
                            <h3 className="panel-title">Mentor</h3>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                {todos.map(function(item) {
                                    return (
                                        <li className="list-group-item">
                                            <span className="tag tag-default tag-pill float-xs-right">{item}</span>
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
    return {todos: state.messages};
};


export default connect(mapStateToProps)(MentorLandingPage);
