import React, {Component} from "react";
import Logo from "./Logo";

class HomePage extends Component {

    render() {
        return (
            <div>
                <Logo/>
                <iframe className="try-git" name="try-git" scrolling="no" src="https://try.github.io/"/>
            </div>
        );
    }
}

export default HomePage;
