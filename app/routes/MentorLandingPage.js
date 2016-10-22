import React, {Component, PropTypes} from "react";
import {Input, PageHeader} from "react-bootstrap";
import NavBar from "./views/NavBar.js";


class MentorLandingPage extends Component {

    render() {
        return (
            <div>
                <NavBar params={ this.props.params } location={ this.props.location }></NavBar>
                <PageHeader style={ {textAlign: 'center'} }
                            params={ this.props.params }
                            location={ this.props.location }>
                    <small params={ this.props.params } location={ this.props.location }>Let us know if you want to
                    </small>
                    <PageHeader style={ {} }
                                params={ this.props.params }
                                location={ this.props.location }>
                        <span style={ {} }
                              params={ this.props.params }
                              location={ this.props.location }>Mentor</span>
                    </PageHeader>
                </PageHeader>
            </div>
        );
    }
}

export default MentorLandingPage;

