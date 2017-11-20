import React from "react";
import ReactMarkdown from "react-markdown";
import {Link} from "react-router";


class ProjectPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      description: ''
    }
  }
  render() {

    const tagStyle = {
      color: "#2DC263",
      padding: "0"
    };
    const divStyle = {
      margin: "0px 0px 30px 0px"
    };
    return (
      <div style={{
        background: "white",
      }} ref="Parent">

        <div style={divStyle} className="row">
          <div className="col-sm-2">
            <img src="/img/Logo.png" height="48px" alt="icon"/>
          </div>
          <div className="col-sm-10">
            <Link to={"/mentor/"+this.props.project.project_id}><h4 style={{
              marginTop: "0",
            }}>{this.props.project.name}</h4></Link>
            <h4><small><ReactMarkdown source={this.props.project.description || ""}/></small></h4>
          </div>
        </div>
        <hr style={{marginTop:"5px", marginBottom:"10px"}}/>
    </div>
    )
  }
}

export default ProjectPanel;
