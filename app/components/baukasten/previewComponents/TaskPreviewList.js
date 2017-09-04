/**
 * Created by frankz on 17.07.17.
 */

import React, {Component} from "react";
import TaskPreview from "./TaskPreview";
import ScrollableAnchor from "react-scrollable-anchor";

/*
 ** This component is responsible for displaying all the Tasks/Projects Previews in one div
 Required props:   flag:     boolean = showProjects (true)
 dataList: Array   = [
 {id: 1,
 name: "This is Proj 1",
 description: "...",
 [input: "..."],
 [output: "..."],
 [contributors: ".."],
 ]}]
 */

class TaskPreviewList extends Component {

    constructor(props) {
        super(props)
        this.tags = ["#tags coming soon"]
        this.contributors = [{name: "Frank", email: "b"}, {name: "Khiem", email: "tt"}]
        this.tasks = [{title: "cmoing soon", task_id: "1"}]
    }


    onClick(task){
      console.log(task);
      this.props.onClick(task);
    }

    render() {
        return (
            <div>
                {
                    this.props.dataList.map((task) => {
                        return <ScrollableAnchor key={task.task_id} id={"t" + task.task_id}>
                           <TaskPreview
                            onClick={() => this.onClick(task)}
                            key={task.task_id}
                            description={task.description}
                            input={task.input}
                            output={task.output}
                            tags={this.tags}
                            title={task.name}/></ScrollableAnchor>
                    })
                }
            </div>
        )
    }
}

export default TaskPreviewList
