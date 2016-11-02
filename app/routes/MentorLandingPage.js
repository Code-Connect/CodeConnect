import React, {Component, PropTypes} from "react";
import {Input, PageHeader} from "react-bootstrap";


class MentorLandingPage extends Component {

    render() {
        return (
            <div>
                <PageHeader style={ {textAlign: 'center'} }>
                    <small >Let us know if you want to
                    </small>
                    <PageHeader>
                        <span>Mentor</span>
                    </PageHeader>
                </PageHeader>
            </div>
        );
    }
}

export default MentorLandingPage;

