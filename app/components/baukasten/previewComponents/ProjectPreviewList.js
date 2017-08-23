import React, {Component} from 'react'
import ProjectPreview from './ProjectPreview'
import ScrollableAnchor from 'react-scrollable-anchor'

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
        super(props);
        this.tags = ["#tags coming soon"];
        this.contributors = [{name: "Frank", email: "b"}, {name: "Khiem", email: "tt"}];
        this.tasks = [{title: "cmoing soon", task_id: "1"}]
    }

    render() {

        return (
            <div id="ProjectPreview">
                {
                    this.props.dataList.map((item) => {
                        return <ScrollableAnchor key={item.project_id} id={"p" + item.project_id}><ProjectPreview id={item.project_id}
                                                                                                  key={item.project_id}
                                                                                                  description={item.description}
                                                                                                  title={item.name}
                                                                                                  tags={this.tags}
                                                                                                  mentor={item.mentor}
                                                                                                  tasks={item.tasks}/></ScrollableAnchor>
                    })
                }
            </div>
        )

    }
}


export default ProjectPreviewList
