import React from "react";
import Footer from "./Footer";
import NavBar from "./routes/views/NavBar";

class App extends React.Component {
  render() {
    return (
      <div>
          <NavBar/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
