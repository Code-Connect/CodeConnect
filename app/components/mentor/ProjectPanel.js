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
    }
    const divStyle = {
      margin: "0px 0px 30px 0px"
    }
    return (
      <div style={{
        background: "white",
      }} ref="Parent">
      <div className="row">
        <div className="col-sm-9"><h5>
          <small style={tagStyle}>
            <b>Tags coming soon{this.props.project.tags != undefined?this.props.project.tags.map((tag) => {
                return tag + " "
              }):null}</b>
          </small>
        </h5>
        </div>
        <div className="col-sm-3">
        </div>
        </div>

        <div style={divStyle} className="row">
          <div className="col-sm-2">
            <img src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" alt="icon"/>
          </div>
          <div className="col-sm-10">
            <Link to={"/mentor/"+this.props.project.project_id}><h4 style={{
              marginTop: "0",
            }}>{this.props.project.name}</h4></Link>
            <h4><small><ReactMarkdown source={this.props.project.description}/></small></h4>
          </div>
        </div>
        <hr style={{marginTop:"5px", marginBottom:"10px"}}/>
    </div>
    )
  }
}

export default ProjectPanel;
