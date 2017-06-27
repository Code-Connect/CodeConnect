import React from 'react';
import {connect} from 'react-redux'
import {getReposGithub, addProjectToCodeConnect} from '../../actions/mentor';
import TaskBlock from '../baukasten/Taskblock.js'
import EditPanel from '../baukasten/EditPanel.js';
import {Panel, NavItem, Nav, Row, Col} from "react-bootstrap";
//import TaskTable from '../baukasten/tableView/TableComponent'
import TableComponent from '../baukasten/tableView/TableComponent'
import TaskTableView from '../baukasten/tableView/TaskTableView'
import {Radio, FormControl, FormGroup } from 'react-bootstrap'
import ProjectTableView from '../baukasten/tableView/ProjectTableView'

class Contributor extends React.Component {

  constructor(props) {
    super(props);
				this.query = require('json-query')

		
		this.state ={showProjects:  false}
		console.log("yek:")
		console.log(this.query('projects.tasks', {data: {projects:this.props.projects}}).value)
  }

	toggleView( event){
		console.log(event.target.value)
		console.log("eve")
			//this.props.toggleView()
		console.log(this.state.showProjects)
		this.setState({showProjects:  !this.state.showProjects})
	}


  //gets called, when the component gets loaded
  componentDidMount() {
    //gets the repos from github
  }

  render() {

		const taskTableView = <TaskTableView tasks={this.props.tasks} />

		const projectTableView = <ProjectTableView projects={{projects: this.props.projects}} tasks={this.props.tasks} flag="task" route="task" labelList={this.labels} dataList={this.data}/>

    return (
      <div className="container" style={{
        borderRadius: '10px',
        padding: '50px',
				paddingTop: '0px'
      }}>
        <div className="row">
							<form>
											<FormGroup >
					  				    <Radio onChange={this.toggleView.bind(this)} checked={this.state.showProjects} name="radiogrp" inline>
					  				      Project
					  				    </Radio>
					  				    {' '}
					  				    <Radio onChange={this.toggleView.bind(this)} checked={!this.state.showProjects} name="radiogrp" inline>
					  				      Tasks 
					  				    </Radio>
					  				  </FormGroup>
							</form>
					{this.state.showProjects? projectTableView: taskTableView}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {tasks: state.tasks.mockData, 
		projects: [
			{name: "Hello SECOND for Everyone!",
			 id: 2,
				data: "2017",
				tasks: [

					{ name: "Task10", task_id: 10, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },

					{ name: "Task1223", task_id: 12, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },

					{ name: "Task1223", task_id: 13, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },
					{ name: "Task1223", task_id: 14, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },

					{ name: "Task1223", task_id: 15, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },

					{ name: "Task1223", task_id: 16, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },
					{ name: "Task1223", task_id: 17, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },

					{ name: "Task1223", task_id: 18, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },

					{ name: "Task1223", task_id: 19, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 }

				]
			},

			{name: "Hello World for Everyone!",
			 id: 1,
				data: "2017",
				tasks: [

					{ name: "Task1", task_id: 1, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },

					{ name: "Task1", task_id: 2, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },

					{ name: "Task1", task_id: 3, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },
					{ name: "Task1", task_id: 4, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },

					{ name: "Task1", task_id: 5, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },

					{ name: "Task1", task_id: 6, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },
					{ name: "Task1", task_id: 7, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },

					{ name: "Task1", task_id: 8, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 },

					{ name: "Task1", task_id: 9, input: "No input required here!", output: "Hello World", description: "Write a Hello World Program!", difficulty: "HARD", tags: ["#hard", "#missionImpossible"], attempts: 0 }

				]
			}

		]
	
	};
};

export default connect(mapStateToProps)(Contributor);
