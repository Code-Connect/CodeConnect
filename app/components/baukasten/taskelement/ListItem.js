import React, {Component} from "react"
import {Popover, OverlayTrigger} from "react-bootstrap"
import {Link, Router, browserHistory} from 'react-router'


class ListItem extends Component {

  constructor(props){
    super(props)
  }

  activate(){
    this.props.activate( this.props.id)
  }


  redirect(){
    browserHistory.push('/task'+this.props.id);
  }

  render () {
    return (
      <tr style={{cursor:"pointer"}} onMouseEnter={this.activate.bind(this)} onClick={this.redirect.bind(this)}>
        <td>{this.props.projectName}</td>
        <td>{this.props.title}</td>
        <td>{this.props.difficulty}</td>
        <td>{this.props.solutions}</td>
        <td>{this.props.status}</td>
      </tr>
    )
  }
}

export default ListItem
