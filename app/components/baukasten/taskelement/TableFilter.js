import React, {Component} from "react"
import {HelpBlock, FormControl, ControlLabel, FormGroup, Checkbox} from 'react-bootstrap'

class TableFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentValue: 5,
            searchID: false,
            searchTitle: false,
            searchTags: false
        }
    }

    filterFunc(){
        return (taskObj)=> filterText(taskObj)
    }

    filterByText(taskObj){
        if(this.state.value.length == 0) return true
        return ((taskObj.name.toLowerCase().includes(this.state.value.toLowerCase()))&&this.state.searchTitle)||((taskObj.task_id.includes(this.state.value))&&this.state.searchID) //|| ((taskObj.tags.includes(this.state.value))&&this.state.searchTitle)
    }

    filterByTags(task_tags){
        if(this.state.value.length == 0) return true
        if(!this.state.searchTags) return false
        var tagList = this.state.value.split(" ")
        return (
            tagList.reduce(
                (acc, tag)=>
                {
                    if(tag==""){
                        return true
                    }
                    return (task_tags.includes(tag)&&acc)
                }, true
            )
        )
    }

    handleInputChange(e){
        this.setState( {value: e.target.value},
            ()=>(this.props.filterTasks((task)=>{return this.filterByText(task)||this.filterByTags(task.tags)})))
        //this.props.filterTasks(this.filterText)
    }

    handleCheckboxIDChange(e){ this.setState({searchID: (e.target.checked)})}

    handleCheckboxTitleChange(e){this.setState({searchTitle: e.target.checked})}
    handleCheckboxTagsChange(e){this.setState({searchTags: e.target.checked})}

    render () {
        return (
            <div>
                <form>
                    <FormGroup
                        controlId="formBasicText"
                    >
                        <ControlLabel>{"Search in: "}
                            <Checkbox onChange={this.handleCheckboxIDChange.bind(this)} checked={this.state.searchID} inline>ID</Checkbox>
                            <Checkbox onChange={this.handleCheckboxTitleChange.bind(this)} checked={this.state.searchTitle} inline>Title</Checkbox>
                            <Checkbox onChange={this.handleCheckboxTagsChange.bind(this)} checked={this.state.searchTags} inline>Tags</Checkbox>

                        </ControlLabel>

                        <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleInputChange.bind(this)}/>




                        <FormControl.Feedback />
                        <HelpBlock>Validation is based on string length.</HelpBlock>
                    </FormGroup>
                </form>
                dass du über deine eigenen witze lachen kannst
            </div>
        )

    }
}

export default TableFilter
