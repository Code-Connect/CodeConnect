import React from 'react';
import {connect} from 'react-redux'
import {Panel} from "react-bootstrap";
import ReactMarkdown from 'react-markdown'
import {ControlLabel, Modal, Button, Form, Col, FormGroup, InputGroup, FormControl} from "react-bootstrap";

class TaskView extends React.Component {
  constructor(props) {
    super(props);
    const taskid = parseInt(this.props.location.pathname.substring(5))
    var task = this.props.tasks.find(
      (task)=> {
        return task.task_id == taskid
      }
    )
    console.log(task)
    this.state = {
      task: task,
      showContact: false
    }
    if(task == undefined){
      task = {name: "No Task Found", description: "No idea why"}    
    }
  }

  openContact() {
    this.setState({
      showContact: true
    })
  }

  closeContact() {
    this.setState({
      showContact: false 
    })
  }

  render() {
		const formStyle={border: "0px", boxShadow: "none"}
    return (
      <div>
        <div className="container" style={{background: "white", borderRadius: "10px"}}>
          <Modal show={this.state.showContact} onHide={this.closeContact.bind(this)}>
            <Modal.Header closeButton style={{background: "#2BC062"}}>
              <Modal.Title>Contact Mentor</Modal.Title>
            </Modal.Header>
						<Modal.Body>
							<Form horizontal>
								<FormGroup controlId="formHorizontalSubject">
									<Col componentClass={ControlLabel} sm={2}>
										Subject
									</Col>
									<Col sm={10}>
										<FormControl style={formStyle} bsSize="small" value={"["+this.state.task.task_id+": "+this.state.task.name+ "] Participation Request"}/>
									</Col>
								</FormGroup>
								<hr/>
								<FormGroup controlId="formHorizontalEmail">
									<Col componentClass={ControlLabel} sm={2}>
										Message 
									</Col>
									<Col sm={10}>
										<FormControl style={formStyle} placeholder="Write a message!" />
									</Col>
								</FormGroup>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={this.closeContact.bind(this)}>Send</Button>
						</Modal.Footer>
					</Modal>
					<div style={{margin: "20px"}}>
						<h3>{this.state.task.name}<Button onClick={this.openContact.bind(this)} bsStyle="success" style={{float: "right"}}>Contact</Button></h3> 
						<hr/>
						<ReactMarkdown source={this.state.task.description}/>
						<hr/>
						<h4>Input</h4><br/>
						<ReactMarkdown source={this.state.task.input}/>
						<hr/>
						<h4>Output</h4><br/>
						<ReactMarkdown source={this.state.task.output}/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {tasks: state.tasks.mockData};
};

export default connect(mapStateToProps)(TaskView);
