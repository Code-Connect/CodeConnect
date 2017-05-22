import React, {Component} from "react"
import {Popover, OverlayTrigger} from "react-bootstrap"


class ListItem extends Component {

    constructor(props){
        super(props)
    }

   activate(){
        this.props.activate( this.props.id)
    }

    render () {
        return (
        <tr onMouseEnter={this.activate.bind(this)}>
            <td className="col-md-2">{this.props.id}</td>
            <td className="col-md-4">{this.props.title}</td>
            <td className="col-md-2">{this.props.difficulty}</td>
            <td className="col-md-1">{this.props.solutions}</td>
            <td className="col-md-3">{this.props.status}</td>
        </tr>
        )

    }

}

export default ListItem
