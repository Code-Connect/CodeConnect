import React, {Component} from "react"
import {browserHistory} from 'react-router'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {connect} from "react-redux";
import ReactMarkdown from 'react-markdown';



/*
** Required Parameters: tags: [string], contributors: [{name: string, email: string}], tasks: [Tasks], title: string
 */


class ProjectPreview extends Component {

    constructor(props) {
        super(props);
        this.labelList = ["Task", "Status"];
        this.omit = this.props.omit ? true : false;
    }

    redirectDetails() {
        browserHistory.push('/contributor/projects/' + this.props.id);
        console.log("redi")
    }

    render() {
        const divStyle = {
            margin: "0px 0px 30px 0px"
        };
        const tagStyle = {
            color: "#2DC263",
            padding: "0"
        };
        const hrStyle={
            borderTop: "1px solid #c8c8c8"
        }

        return (
            <div className="well" style={{
                background: "#f1f1f1",
                marginTop: "20px"
            }} ref="Parent">

                <div className="short-preview row">
                    <div className="col-sm-2 logo">
                        <img src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png"
                             alt="icon"/>
                    </div>
                    <div className="col-sm-10 title" style={{display: "flex"}}>
                        <h1 style={{
                            marginTop: "0",
                            flex: "auto"
                        }}>{this.props.title}</h1>

                        <p style={{padding: "10px", float: "right", borderRadius: "5px", cursor: "pointer"}}
                           className="btn-success btn" onClick={this.redirectDetails.bind(this)}>View</p>

                    </div>
                </div>
                <hr style={hrStyle}/>

                <div style={divStyle}>
                    <h4>Description</h4>
                    <ReactMarkdown source={this.props.description}/>
                </div>
                <hr style={hrStyle}/>
                <div style={divStyle}>
                    <h4>Mentor</h4>
                    {/*<p>{this.props.mentor.name + ": " + this.props.mentor.email}</p>*/}
                </div>
                <hr style={hrStyle}/>
                {this.omit || this.props.tasks == null ? null :
                    <div style={divStyle}>
                        <h4>Tasks</h4>
                        <ListGroup fill>
                            {
                                this.props.tasks.map((task, index) => {
                                    console.log("t" + task);
                                    console.log("s" + this.props.taskDict["1"]);
                                    return (
                                        <ListGroupItem key={index}><span style={{
                                            fontWeight: 'bold',
                                            color: "#999"
                                        }}>{this.props.taskDict[task].name}</span></ListGroupItem>
                                    )
                                })
                            }
                        </ListGroup>
                    </div>
                }
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {taskDict: state.projects.tasks};
};

export default connect(mapStateToProps)(ProjectPreview)
