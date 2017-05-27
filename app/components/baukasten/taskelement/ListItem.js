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
    console.log("yeeea")
    browserHistory.push('/task'+this.props.id);
  }

  render () {
    return (
      <tr style={{cursor:"pointer"}} onMouseEnter={this.activate.bind(this)} onClick={this.redirect.bind(this)}>
        <td className="col-md-2">
          {this.props.id}
        </td>
        <td className="col-md-4">{this.props.title}</td>
        <td className="col-md-2">{this.props.difficulty}</td>
        <td className="col-md-1">{this.props.solutions}</td>
        <td className="col-md-3">{this.props.status}</td>
      </tr>
    )

  }

}

export default ListItem
