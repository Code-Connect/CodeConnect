import React from "react";
import {connect} from "react-redux";
import {Breadcrumb, FormGroup, Radio} from "react-bootstrap";

class Contributor extends React.Component {
  constructor(props) {
    super(props);
  }

  setActiveProject(name) {
    this.setState({
      directory: ["PROJECTS", name]
    })
  }
  render() {
    return (
      <div className = "roundpanel">
        {this.props.children}
      </div>
    );
  }
}

export default Contributor;
