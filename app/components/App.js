import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/> {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default App;
