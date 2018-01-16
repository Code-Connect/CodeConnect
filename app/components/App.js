import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div><Header/> {this.props.children}
          <Footer/></div>
      </MuiThemeProvider>
    );
  }
}

export default App;
