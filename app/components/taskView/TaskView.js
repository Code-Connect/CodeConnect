import React from 'react';
import {connect} from 'react-redux'
import {Panel} from "react-bootstrap";
import ReactMarkdown from 'react-markdown'
import {
  ControlLabel,
  Modal,
  Button,
  Form,
  Col,
  FormGroup,
  InputGroup,
  FormControl
} from "react-bootstrap";

class TaskView extends React.Component {
  constructor(props) {
    super(props);
    var taskid = 0
    taskid = parseInt(this.props.location.pathname.substring(6))

    this.query = require('json-query')
    var tasks = this.query('projects.tasks', {
      data: {
        projects: this.props.projects
      }
    }).value

    var task = tasks.find((task) => {
      return task.task_id == taskid
    })
    if (task == undefined) {
      task = {
        name: "No Task Found",
        description: "No idea why"
      }
    }
    this.state = {
      task: task,
      showContact: false
    }

  }

  openContact() {
    this.setState({showContact: true})
  }

  closeContact() {
    this.setState({showContact: false})
  }

  render() {
    const formStyle = {
      border: "0px",
      boxShadow: "none"
    }
    return (
      <div>
        <div className="container" style={{
          background: "white",
          borderRadius: "10px"
        }}>
          <Modal show={this.state.showContact} onHide={this.closeContact.bind(this)}>
            <Modal.Header closeButton style={{
              background: "#2BC062"
            }}>
              <Modal.Title>Contact Mentor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form horizontal>
                <FormGroup controlId="formHorizontalSubject">
                  <Col componentClass={ControlLabel} sm={2}>
                    Subject
                  </Col>
                  <Col sm={10}>
                    <FormControl style={formStyle} bsSize="small" value={"[" + this.state.task.task_id + ": " + this.state.task.name + "] Participation Request"}/>
                  </Col>
                </FormGroup>
                <hr/>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Message
                  </Col>
                  <Col sm={10}>
                    <FormControl style={formStyle} placeholder="Write a message!"/>
                  </Col>
                </FormGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeContact.bind(this)}>Send</Button>
            </Modal.Footer>
          </Modal>
          <div style={{
            margin: "20px"
          }}>
            <h3>{this.state.task.name}
              <Button onClick={this.openContact.bind(this)} bsStyle="success" style={{
                float: "right"
              }}>Contact</Button>
            </h3>
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
  return {
    tasks: state.tasks.mockData,
    projects: [
      {
        name: "Hello SECOND for Everyone!",
        id: 2,
        contributors: [
          {
            name: "Frank Lu",
            email: "frankz.lu@gmail.com"
          }, {
            name: "Schwaanz",
            email: "schwanz@gmail.com"
          }
        ],
        description: "This is a list of aaallll the SECOND Hello World Tasks. It is just a description, but hey, it is something",
        tags: [
          "#haGay", "#yeeah", "#getschwifty"
        ],
        data: "2017",
        tasks: [

          {
            name: "Task10",
            task_id: 10,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 12,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 13,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 14,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 15,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 16,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 17,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 18,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1223",
            task_id: 19,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }

        ]
      }, {
        name: "Hello World for Everyone!",
        id: 1,
        data: "2017",
        tags: [
          "#haGay", "#yeeah", "#getschwifty"
        ],
        contributors: [
          {
            name: "Khiem Ton",
            email: "derTon@gmail.com"
          }, {
            name: "Schwaanz 456",
            email: "schwanzPower456@gmail.com"
          }
        ],
        description: "this is made by Mr ton and mr schwanzpower456. Have fun writing Hello World Programs! Yeeeaaah! ~",
        tasks: [

          {
            name: "Task1",
            task_id: 1,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 2,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 3,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 4,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 5,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 6,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 7,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 8,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }, {
            name: "Task1",
            task_id: 9,
            input: "No input required here!",
            output: "Hello World",
            description: "Write a Hello World Program!",
            difficulty: "HARD",
            tags: [
              "#hard", "#missionImpossible"
            ],
            attempts: 0
          }

        ]
      }

    ]
  };
};

export default connect(mapStateToProps)(TaskView);
