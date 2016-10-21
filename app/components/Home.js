import React from 'react';
import {connect} from 'react-redux'
import Messages from './Messages';

class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Messages messages={this.props.messages}/>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel">
                            <div className="panel-body">
                                <h3>Projects</h3>
                                <p>On this Website oyu can see Open source Projects</p>
                                <a href="#" role="button" className="btn btn-default">View details</a>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="panel-body">
                                <h3>Projects</h3>
                                <p>On this Website oyu can see Open source Projects</p>
                                <a href="#" role="button" className="btn btn-default">View details</a>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="panel-body">
                                <h3>Projects</h3>
                                <p>On this Website oyu can see Open source Projects</p>
                                <a href="#" role="button" className="btn btn-default">View details</a>
                            </div>
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

export default connect(mapStateToProps)(Home);
