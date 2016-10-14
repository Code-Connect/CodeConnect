import React from 'react';
import {connect} from 'react-redux'
import Messages from './Messages';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Title"
        };
    }

    test() {
        console.log("123456789");
    }

    render() {
        return (
            <div className="container">
                <Messages messages={this.props.messages}/>
                <div className="panel-body">
                    <div className="panel panel-primary">
                        <div className="panel-heading">Panel</div>
                        <div className="panel-body">{this.state.title}</div>
                        <input/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel">
                            <div className="panel-body">
                                <h3>Heading</h3>
                                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                                <a onClick={this.test.bind(this)} href="#" role="button" className="btn btn-default">YOOOOO</a>
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
