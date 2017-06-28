import React, {Component} from "react"
import ReactDOM from 'react-dom'
import {Panel} from "react-bootstrap"
import ReactMarkdown from 'react-markdown'

class TaskPreview extends Component {

	constructor(props) {
		super(props)

	}

	render() {
		const divStyle = {
			margin: "0px 0px 30px 0px"
		}
		const divStyl = {
			margin: "0px 0px 10px 0px",
			boxShadow: "0 0px 4px 0 rgba(0, 0, 1, 0.2)",
			borderRadius: "5px",
			padding: "5px 20px 5px 20px"
		}

		const tagStyle = {
			color: "#2DC263"
		}

		return (
			<div className="col-md-0 hidden-sm hidden-xs" style={{
				width: '100%',
							width:"33vw",
        height: "calc(100vh - 200px)",
			}} ref="Parent">

			<h5 style={tagStyle}>
					<small style={{
						padding: "0px"
					}}>
			<b>{this.props.tags.map((tag) => {
				return tag + " "
			})}</b>
				</small>
			</h5>
			<hr/>
			<div style={divStyle}>
			<h3>{this.props.title}</h3>
			<h5><small><hr/><ReactMarkdown source={this.props.description}/></small></h5>
			</div>
			<div style={divStyle}>
			<h4>Input</h4><hr/>
			<h5><small><ReactMarkdown source={this.props.input}/></small></h5>
			</div>
			<div style={divStyle}>
				<h4>Output</h4><hr/>
				<h5><small><ReactMarkdown source={this.props.output}/></small></h5></div>
			</div>
	)

	}
}
export default TaskPreview
