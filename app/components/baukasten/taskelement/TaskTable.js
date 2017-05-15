import React, {Component} from "react"
import ListItem from "./ListItem.js"
import TaskPreview from "./TaskPreview.js"
import {Table,Panel} from "react-bootstrap"
import {StickyContainer, Sticky} from 'react-sticky'

class TaskTable extends Component {

    constructor(props) {
        super(props)
         this.state = {
            current_title: "Task Preview",
            current_description: "You can see the task preview once you hover over the table rows"
        }
        
    }

    componentDidMount(){
        this.state = {
            current_title: "Task Preview",
            current_description: "You can see the task preview once you hover over the table rows"
        }
    }

    setActiveElement(task){
        this.setState( {
            current_title: task.title,
            current_description : task.description
        })
    }

    render () {
			
		return (
        <div className="row" style={{ background: 'white'}}>
        
		<StickyContainer style={{ padding: '0 30px' }}>
		<div className="col-md-6">
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                <th className="col-md-2">#</th>
                <th className="col-md-4">Title</th>
                <th className="col-md-2">Difficulty</th>
                <th className="col-md-1">#Solutions</th>
                <th className="col-md-3">Status</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.props.tasks.map( (task) => {
                            return <ListItem activate={this.setActiveElement.bind(this)} id={task.task_id} key={task.task_id} description={task.description} title={task.name} difficulty={task.difficulty} solutions={task.solutions} status={task.status}/>
                        })
                    }
                </tbody>
            </Table>
        </div>
        
        <div className="col-md-6">
			<Sticky topOffset={-80}>
            {
              ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
                console.log({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight });
                return <div style={style}>
				{ isSticky?<div style={{height: '80px'}}></div>:null
				}
				<TaskPreview title={this.state.current_title}
            description={this.state.current_description}/></div>
              }
            }
          </Sticky>
        </div>
		</StickyContainer>
        </div>
    )
    }
}

export default TaskTable
