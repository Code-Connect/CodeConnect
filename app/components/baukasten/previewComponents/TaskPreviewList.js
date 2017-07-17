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

class ProjectPreviewList extends Component {

    constructor(props) {
        super(props)
        this.tags = ["#tags coming soon"]
        this.contributors = [{name: "Frank", email: "b"}, {name: "Khiem", email: "tt"}]
        this.tasks = [{title: "cmoing soon", task_id: "1"}]
    }

    render() {

        return (
            < div >
                {
                    this.props.dataList.map((item) => {
                        return <ScrollableAnchor key={item.task_id} id={"t" + item.task_id}><TaskPreview
                            key={item.task_id} description={item.description} input={item.input} output={item.output}
                            tags={this.tags} title={item.name}/></ScrollableAnchor>
                    })
                }
            </div>
        )

    }
}

export default ProjectPreviewList
