import React, {Component, PropTypes} from "react";
import UserButtons from "./homepage/UserButtons";
import Logo from "./homepage/Logo";
import NewestProjects from "./homepage/NewestProjects";

class HomePage extends Component {

    render() {
        return (
            <div>
                <Logo/>
                <UserButtons/>
                {/* <NewestProjects/> */}
            </div>
        );
    }
}

export default HomePage;
