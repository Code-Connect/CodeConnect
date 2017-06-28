import React, {Component} from 'react'
import TaskPreview from './TaskPreview'
import ProjectPreview from './ProjectPreview'
import ScrollableAnchor, {goToAnchor} from 'react-scrollable-anchor'

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

class PreviewList extends Component {

  constructor(props) {
    super(props)

  }

  render() {

    return (
      < div > {
      this.props.flag == "task"
        ? this.props.dataList.map((item) => {
          return <ScrollableAnchor key={item.task_id} id={"t" + item.task_id}><TaskPreview key={item.task_id} description={item.description} input={item.input} output={item.output} tags={item.tags} title={item.name}/></ScrollableAnchor>
        })
        : this.props.dataList.map((item) => {
          return <ScrollableAnchor key={item.id}  id={"p" + item.id}><ProjectPreview key={item.id} description={item.description}  title={item.title} tags={item.tags} contributors={item.contributors} tasks={item.tasks}/></ScrollableAnchor>
        })
      }
     < /div>
    )

  }
}

export default PreviewList
