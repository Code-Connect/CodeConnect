import React, {Component} from "react"
import {Popover, OverlayTrigger} from "react-bootstrap"
import {Link, Router, browserHistory} from 'react-router'

class ListItem extends Component {

  constructor(props) {
    super(props)
    //props: Info Object
  }

  activate() {
    console.log("id:" + this.props.id)
    this.props.activate(this.props.id)
  }

  redirect() {
    browserHistory.push('/' + this.props.route + '/' + this.props.id);
  }

  render() {
    return (
      <tr style={{
        cursor: "pointer"
      }} onMouseEnter={this.activate.bind(this)} onClick={this.redirect.bind(this)}>
        {this.props.info.map((attr, index) => {
          return <td key={index}>{attr}</td>
        })
}
      </tr>
    )
  }
}

export default ListItem
