import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {githubLogin} from '../../actions/oauth';
import Messages from '../Messages';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    handleGithub() {
        this.props.dispatch(githubLogin())
    }

    render() {
        return (
            <div className="login-container container">
                <div className="panel">
                    <div className="panel-body">
                        <Messages messages={this.props.messages}/>
                        <div className="hr-title">
                            <span>Sign in</span>
                        </div>
                        <div className="btn-toolbar text-center">
                            <button onClick={this.handleGithub.bind(this)} className="btn btn-github">Sign in with Github</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {messages: state.messages};
};

export default connect(mapStateToProps)(Login);
