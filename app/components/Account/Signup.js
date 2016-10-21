import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {signup} from '../../actions/auth';
import {facebookLogin, twitterLogin, googleLogin, vkLogin, githubLogin} from '../../actions/oauth';
import Messages from '../Messages';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleFacebook() {
        this.props.dispatch(facebookLogin())
    }

    handleTwitter() {
        this.props.dispatch(twitterLogin())
    }

    handleGoogle() {
        this.props.dispatch(googleLogin())
    }

    handleVk() {
        this.props.dispatch(vkLogin())
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
                            <span>or</span>
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

export default connect(mapStateToProps)(Signup);
