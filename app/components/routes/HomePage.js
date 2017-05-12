import React, {Component, PropTypes} from "react";
import UserButtons from "./homepage/UserButtons";
import Logo from "./homepage/Logo";
import NewestProjects from "./homepage/NewestProjects";
import Wrapper from "./homepage/Wrapper.js";

class HomePage extends Component {

    render() {
        return (
            <div>
                <Wrapper/>
                {/* <NewestProjects/> */}
            </div>
        );
    }
}

export default HomePage;
