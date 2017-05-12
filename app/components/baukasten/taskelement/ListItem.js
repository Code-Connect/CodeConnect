import React, {Component} from "react"


class ListItem extends Component {

    constructor(props){
        super(props)
    }

    render () {
        return (
        <tr>
            <td>{this.props.id}</td>
            <td>{this.props.title}</td>
            <td>{this.props.difficulty}</td>
            <td>{this.props.solutions}</td>
            <td>{this.props.status}</td>
        </tr>
        )

    }

}

export default ListItem
