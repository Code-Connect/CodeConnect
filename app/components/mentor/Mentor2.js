import React from 'react';
import {connect} from 'react-redux'
import {
  Button,
  FormGroup,
  InputGroup,
  FormControl,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import EditPanel from '../baukasten/EditPanel.js';
import Editor from '../baukasten/Editor.js';
import {updateTask, addTask, deleteTask} from '../../actions/taskActions';
import TaskPanel from './TaskPanel';
import MentorTable from './MentorTable';
import jsonQuery from 'json-query';

class Mentor2 extends React.Component {
  constructor(props) {
    super(props);
    var a = jsonQuery('projects[project_id=1]', {
      data: {
        projects: this.props.projects
      }
    }).value;
    this.state = {
      inputfield: '',
      project_id: this.props.params.project,
      projects: a.tasks
    };
  }

  saveChange(task) {
    this.props.dispatch(updateTask(task));
  }

  deleteTask(task) {
    this.props.dispatch(deleteTask(task));
  }

  updateTaskAttribute(task_id, fieldtype, newCode) {
    this.props.dispatch({type: 'UPDATE_ATTRIBUTE', task_id: task_id, fieldtype: fieldtype, newCode: newCode});
  }

  addTask(event) {
    this.props.dispatch(addTask(this.state.inputfield, this.state.project_id));
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="container" style={{
        borderRadius: '10px',
        background: 'white',
        padding: '50px'
      }}>

        <Row className="show-grid">
          <Col xs={12} md={4}>
            <FormGroup>
              <InputGroup>
                <FormControl type="text" name="inputfield" placeholder="Projectname" value={this.state.inputfield} onChange={this.handleInputChange.bind(this)}/>
                <InputGroup.Button>
                  <Button bsStyle="success" onClick={this.addTask.bind(this)}>Add new Task</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
            <MentorTable onClick={() => {}} datatype = "task" data={this.state.projects}/>
          </Col>
          <Col xs={12} md={8}>
            {this.state.projects.map((task) => {
              return (
                <div>
                  <TaskPanel updateTaskAttribute={this.updateTaskAttribute.bind(this)} task={task} deleteTask={this.deleteTask.bind(this)} saveChange={this.saveChange.bind(this)}/>
                  <hr/>
                </div>
              )
            })}
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    //projects: state.projects.addedProjects
    projects: [
      {
        name: "Hello SECOND for Everyone!",
        project_id: 2,
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
        project_id: 1,
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


export default connect(mapStateToProps)(Mentor2);
