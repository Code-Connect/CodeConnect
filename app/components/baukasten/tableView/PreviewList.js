import React, {Component} from 'react'
import TaskPreview from './TaskPreview'
import ProjectPreview from './ProjectPreview'
import ScrollableAnchor, {goToAnchor} from 'react-scrollable-anchor'
import IntroPreview from './IntroPreview'

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
    this.tags = ["#tags coming soon"]
    this.contributors = [{name: "Frank", email:"b"}, {name: "Khiem", email: "tt"}]
    this.tasks = [{title: "cmoing soon", task_id: "1"}]
  }

  render() {

    return (
      < div >
      <IntroPreview/>
       {
      this.props.flag == "task"
        ? this.props.dataList.map((item) => {
          return <ScrollableAnchor key={item.task_id} id={"t" + item.task_id}><TaskPreview key={item.task_id} description={item.description} input={item.input} output={item.output} tags={this.tags} title={item.name}/></ScrollableAnchor>
        })
        : this.props.dataList.map((item) => {
          return <ScrollableAnchor key={item.id}  id={"p" + item.id}><ProjectPreview id={item.id} key={item.id} description={item.description}  title={item.name} tags={this.tags} contributors={this.contributors} tasks={this.tasks}/></ScrollableAnchor>
        })
      }
     < /div>
    )

  }
}

export default PreviewList
