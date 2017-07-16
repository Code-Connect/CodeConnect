import React, {Component} from "react";
import {connect} from "react-redux";
import About from "../about/About";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const page = this.props.user ? <p>Logged in</p> : <About/>;
        return (
            <div className="HomePage">
                {page}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.user.github};
};

export default connect(mapStateToProps)(HomePage);
