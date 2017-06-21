import React, {Component} from "react"
import ListItem from "./ListItem.js"
import TaskPreview from "./TaskPreview.js"
import TableFilter from "./TableFilter.js"
import {Table, Panel} from "react-bootstrap"
import {StickyContainer, Sticky} from 'react-sticky'

class TaskTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_title: "Task Preview",
      current_description: "You can see the task preview once you hover over the table rows",
      current_output: "",
      current_input: "",
      current_tasks: this.props.tasks,
      current_tags: ["tags here"]
    }

  }

  filterTasks(func) {
    this.setState({current_tasks: this.props.tasks.filter(func)})
  }

  setUndefPreview() {
    this.state({current_title: "Task Preview", current_description: "could not find element :("})
  }

  setActiveElement(taskid) {
    let element = this.props.tasks.find(x => (x.task_id === taskid))
    if (element === undefined) {
      setUndefPreview()
      return
    }
    this.setState({current_title: element.name, current_description: element.description, current_input: element.input, current_output: element.output, current_tags: element.tags})
  }

  render() {

    const tableStyle = {
      borderRadius: "5px"
    }

    return (
      <div className="row" style={{
        background: 'white'
      }}>

        <StickyContainer style={{
          height: '600'
        }}>
          <div className="col-md-6">
            <TableFilter filterTasks={this.filterTasks.bind(this)}/>
            <Table striped bordered condensed hover style={tableStyle}>
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
                {this.state.current_tasks.map((task) => {
                  return <ListItem activate={this.setActiveElement.bind(this)} id={task.task_id} key={task.task_id} description={task.description} title={task.name} difficulty={task.difficulty} solutions={task.solutions} status={task.status}/>
                })
}
              </tbody>
            </Table>
          </div>

          <div className="col-md-6">
            <Sticky topOffset={-80}>
              {({
                isSticky,
                wasSticky,
                style,
                distanceFromTop,
                distanceFromBottom,
                calculatedHeight
              }) => {
                return (
                  <div style={style}>
                    {isSticky
                      ? <div style={{
                          height: '80px'}}></div>: null}<TaskPreview title={this.state.current_title} tags={this.state.current_tags} description={this.state.current_description} input={this.state.current_input} output={this.state.current_output}/></div>)}}
            </Sticky>
          </div>
        </StickyContainer>
      </div>
    )
  }
}

export default TaskTable
