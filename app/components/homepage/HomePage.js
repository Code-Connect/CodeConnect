import React, {Component} from "react";
import {connect} from "react-redux";
import About from "../about/About";
import NewsPage from "./NewsPage";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const page = this.props.user ? <NewsPage/> : <About/>;
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
